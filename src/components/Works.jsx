import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-tilt';

import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { MoreButton } from '.';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-card p-5 rounded-2xl sm:w-[310px] w-full min-h-[500px]"
      >
        <div className="relative w-full  h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover object-left rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-[#EEEEEE] text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('work.title')}</p>
        <h2 className={styles.sectionHeadText}>{t('work.subTitle')}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
          {t('work.content')}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-8">
        {projects.map((project, index) => {
          // 国际化
          const localizedProject = {
            ...project,
            name: t(project.name),
            description: t(project.description),
          };

          return <ProjectCard key={`project-${index}`} index={index} {...localizedProject} />;
        })}
        {/* Read More 按钮+动效 */}
        <MoreButton href="https://github.com/ayueaa?tab=repositories" />
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'project');
