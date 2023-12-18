import { BrowserRouter } from 'react-router-dom';

import { herobgPreview, herobgVideo, mainbg } from './assets';
// eslint-disable-next-line import/no-unresolved
import {
  About,
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
  return (
    <BrowserRouter>
      <div className="relative z-0">
        {/*  全局悬浮按钮 */}
        <PageFloatButtons />
        {/* 背景视频,hero页及菜单栏 */}
        <div className="relative">
          <video autoPlay loop muted playsInline className="video-portrait">
            {/* 使用外链获取,减轻服务器带宽压力 */}
            <source src="https://wy-portfolio.oss-cn-chengdu.aliyuncs.com/herobg-mb.webm" type="video/webm" />
            {/* <source src="src/assets/herobg-mb.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>

          <video autoPlay loop muted playsInline className="video-landscape">
            <source src="https://wy-portfolio.oss-cn-chengdu.aliyuncs.com/herobg.webm" type="video/webm" />
            {/* <source src="src/assets/herobg.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0">
            <Navbar />
            <Hero />
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
