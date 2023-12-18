import { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import Typewriter from 'typewriter-effect';

import { coding } from '../assets';
import { socials } from '../constants';
import { styles } from '../styles';
import { GreetingLottie } from '../utils';

const SocialButtons = () => {
  return (
    <div>
      {socials.map((social, index) => (
        <SocialIcon key={index} url={social.url} network={social.name} target="_blank" className="custom-social-icon" />
      ))}
    </div>
  );
};

const Hero = () => {
  // 横向屏幕flex左右展示,竖向屏幕上下展示
  const [isHorizontalLayout, setIsHorizontalLayout] = useState(window.innerWidth / window.innerHeight > 1.2);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontalLayout(window.innerWidth / window.innerHeight > 1.2);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full h-auto mx-auto">
      <div
        className={`absolute inset-0 top-[60px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className={`w-1 ${isHorizontalLayout ? 'h-80' : 'h-60'} violet-gradient`} />
        </div>

        <div
          className={`flex ${isHorizontalLayout ? 'flex-row sm:items-start' : 'flex-col'} justify-center mx-auto mt-5`}
        >
          <div className="flex flex-col justify-center">
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I&apos;m <span className="text-[#915EFF]">Yue</span>
            </h1>
            <div className={`${styles.heroSubText} mt-2 text-white-100`}>
              <Typewriter
                options={{
                  strings: ['Python Engineer', 'React Learner', 'Full Stack Aspirant'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                }}
              />
            </div>
            <div className={`mt-15 ${isHorizontalLayout ? 'sm:mt-20' : ''}`}>
              <SocialButtons />
            </div>
          </div>

          <div
            className={`mt-5 ${
              isHorizontalLayout ? 'sm:mt-0 sm:ml-40' : ''
            } w-[250px] sm:w-[450px] h-[250px] sm:h-[450px]`}
          >
            <GreetingLottie animationData={coding} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
