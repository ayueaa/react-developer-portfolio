import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import { About, Blogs, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="relative">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster="/src/assets/herobg.png">
            <source src="/src/assets/herobg.webm" type="video/webm" />
            <source src="/src/assets/herobg.mp4" type="video/mp4" />
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
            backgroundImage: 'url("/src/assets/dark9.jpg")',

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
