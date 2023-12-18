import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { herobgMbPreview, herobgMbVideo, herobgPreview, herobgVideo } from './assets';
// eslint-disable-next-line import/no-unresolved
import {
  About,
  AnimatedButton,
  Blogs,
  Contact,
  Experience,
  Hero,
  Navbar,
  PageFloatButtons,
  StarsCanvas,
  Tech,
  Works,
  // eslint-disable-next-line import/no-unresolved
} from './components';

const App = () => {
  const BackgroundVideo = () => {
    const [videoInfo, setVideoInfo] = useState(getVideoInfo());

    useEffect(() => {
      function handleResize() {
        setVideoInfo(getVideoInfo());
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    // 根据屏幕宽度决定视频源和poster
    function getVideoInfo() {
      const aspectRatio = window.innerWidth / window.innerHeight;

      if (aspectRatio > 1.2) {
        return {
          src: 'https://wy-portfolio.oss-cn-chengdu.aliyuncs.com/herobg.webm',
          poster: { herobgPreview }, // 替换为横向poster的路径
        };
      } else {
        return {
          src: 'https://wy-portfolio.oss-cn-chengdu.aliyuncs.com/herobg-mb.webm',
          poster: { herobgMbPreview }, // 替换为纵向poster的路径
        };
      }
    }

    return (
      <div style={{ position: 'relative', width: '100%', minHeight: '500px' }}>
        <video autoPlay loop muted playsInline poster={videoInfo.poster}>
          <source src={videoInfo.src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div className="relative z-0">
        {/*  全局悬浮按钮 */}
        <PageFloatButtons />
        {/* 背景视频,hero页及菜单栏 */}
        <div className="relative">
          <BackgroundVideo />
          <div className="absolute inset-0">
            <Navbar />
            <Hero />
            <AnimatedButton href="#about" />
          </div>
        </div>

        <div
          className="relative z-0"
          style={{
            // backgroundImage: `url(${mainbg})`,
            backgroundImage: 'url("https://wy-portfolio.oss-cn-chengdu.aliyuncs.com/mainbg.jpg")',

            backgroundRepeat: 'no-repeat',
            // 设置背景大小，这里可以使用 cover 或 contain，具体取决于你的需求
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <About />
          <Experience />
          <Tech />
          <Works />
          <StarsCanvas />
          <Blogs />
          <Contact />
        </div>

        {/* <Project /> */}
        {/* <Feedbacks /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
