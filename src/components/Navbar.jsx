import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

// 提取导航链接渲染部分为独立组件
const NavLinkItem = ({ id, title, active, handleClick }) => (
  <li
    className={`${
      active === id ? 'text-white' : 'text-secondary'
    } hover:text-white text-[18px] font-medium cursor-pointer`}
  >
    <a href={`#${id}`} onClick={handleClick}>
      {title}
    </a>
  </li>
);

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY; // 使用 window.scrollY 替换 pageYOffset
    let ticking = false;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollPos > prevScrollPos) {
            // 向下滚动，隐藏导航栏
            setScrolled(true); // 更新为 true，表示已滚动
            setToggle(false);
          } else {
            // 向上滚动，显示导航栏
            setScrolled(false); // 更新为 false，表示未滚动
            setToggle(true);
          }

          prevScrollPos = currentScrollPos;
          ticking = false;
        });

        ticking = true;
      }
    };

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(current => {
        const sectionId = current.getAttribute('id');
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', navbarHighlighter);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* 使用Link组件处理点击时滚动到顶部 */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h- object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Yue&apos;s &nbsp;
            <span className="sm:block hidden"> Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* 使用map函数渲染导航链接 */}
          {navLinks.map(nav => (
            <NavLinkItem
              key={nav.id}
              id={nav.id}
              title={nav.title}
              active={active}
              handleClick={() => {
                setToggle(!toggle);
              }}
            />
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {/* 使用map函数渲染导航链接 */}
              {navLinks.map(nav => (
                <NavLinkItem
                  key={nav.id}
                  id={nav.id}
                  title={nav.title}
                  active={active}
                  handleClick={() => {
                    setToggle(!toggle);
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
