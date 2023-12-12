import { motion } from 'framer-motion';
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
        <SocialIcon
          key={index}
          id={index}
          url={social.url}
          network={social.name}
          target="_blank"
          style={{ height: 35, width: 35 }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
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
          {/* 社交软件图标 */}
          <div style={{ marginTop: '120px' }}>
            <SocialButtons />
          </div>
        </div>

        <div className="flex flex-1 justify-center items-end">
          {/* 使用容器元素包裹，并设置容器元素的样式 */}
          <div style={{ width: '450px', height: '450px' }}>
            <GreetingLottie animationData={coding} />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
