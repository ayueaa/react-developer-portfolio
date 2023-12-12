import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies, skills } from "../constants";
import GreetingLottie from "../utils/DisplayLottie";
import { build } from "../assets";
import { Progress } from "antd";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div style={{ height: "50px" }}></div>
      {/* 使用 Flex 布局的容器 */}
      <div className="flex flex-row justify-center items-center gap-10">
        {/* GreetingLottie 部分 */}
        <div style={{ width: "450px", height: "300px" }}>
          <GreetingLottie animationData={build} />
        </div>
        {/* technologies 部分 */}
        <div className="flex flex-1 flex-wrap justify-center items-center">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
      {/* from-[#95C8E6] to-[#68A1B6] */}
      <div className="flex flex-col gap-8">
        {skills.map((skill) => (
          <div key={skill.Stack}>
            <span>{skill.Stack}</span>
            <Progress
              percent={skill.progressPercentage}
              strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
              status="active"
              aria-label={skill.Stack}
              strokeWidth={10}
              showInfo={false}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
