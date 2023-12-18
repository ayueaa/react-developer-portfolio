import { Progress } from 'antd';
import { motion } from 'framer-motion';

import { build } from '../assets';
import { skills, technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { GreetingLottie } from '../utils';
import { textVariant } from '../utils/motion';
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div style={{ height: '50px' }}></div>
      {/* 使用 Flex 布局的容器 */}
      <div className="flex flex-row justify-center items-center gap-10 flex-wrap">
        {/* GreetingLottie 部分 */}
        <div className="w-[300px] h-[200px] sm:w-[450px] sm:h-[300px]">
          <GreetingLottie animationData={build} />
        </div>

        {/* technologies 部分 */}
        <div className="flex flex-1 flex-wrap justify-center items-center">
          {technologies.map(technology => (
            <div className="w-20 h-20 sm:w-28 sm:h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {skills.map(skill => (
          <div key={skill.Stack}>
            <span>{skill.Stack}</span>
            <Progress
              percent={skill.progressPercentage}
              strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
              status="active"
              aria-label={skill.Stack}
              width={10}
              showInfo={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
