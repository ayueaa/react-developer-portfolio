import 'react-vertical-timeline-component/style.min.css';

import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(29, 24, 54, 0.2)',
        color: '#fff',
        boxShadow: 'none',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[70%] h-[70%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[18px] sm:text-[24px] font-bold">{experience.title}</h3>
        <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('experience.title')}</p>
        <h2 className={styles.sectionHeadText}>{t('experience.subTitle')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            // 国际化
            const localizedExperience = t(`experience.detail.${index}`, { returnObjects: true });
            const combinedExperience = { ...experience, ...localizedExperience };

            return <ExperienceCard key={index} experience={combinedExperience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
