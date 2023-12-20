import { Tag } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-tilt';

import { blogs } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { MoreButton, ScrollArrowButton } from '.';

const BlogCard = ({ index, title, description, wordCount, readCount, tags, image, articleLink }) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} onClick={() => window.open(articleLink, '_blank')}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#e8f1f5] p-5 rounded-2xl sm:w-[350px] w-full md:w-[300px] lg:w-[350px]"
        onClick={() => {
          console.log('Article link:', articleLink); // 测试输出
          window.open(articleLink, '_blank');
        }}
      >
        <div className="relative w-full h-[180px]">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="mt-3">
          <h3 className="text-[#333333] font-bold text-[20px]">{title}</h3>
          <p className="text-[#888888] text-[13px]">
            {t('blog.words')}: {wordCount} | {t('blog.reads')}: {readCount}
          </p>
          <p className="mt-2 text-[#666666] text-[14px] ">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <Tag key={tag.name} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Blogs = () => {
  const { t } = useTranslation();

  const scroll = direction => {
    const container = document.getElementById('scroll-container');
    const scrollAmount = 400; // 每次滚动的像素量
    const scrollLeft = container.scrollLeft;

    container.scrollTo({
      top: 0,
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('blog.title')}</p>
        <h2 className={styles.sectionHeadText}>{t('blog.subTitle')}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
          {t('blog.content')}
        </motion.p>
      </div>
      <div className="relative mt-20 flex">
        {/* 向左滚动按钮动效 */}
        <ScrollArrowButton direction="left" scroll={scroll} />
        <div className="mt-20 flex overflow-x-auto width: 100%;" id="scroll-container">
          {blogs.map((blog, index) => (
            <div className="blog-card inline-block mr-8 last:mr-0" key={`project-${index}`}>
              <BlogCard index={index} {...blog} />
            </div>
          ))}
          {/* Read More 按钮+动效 */}
          <MoreButton href="https://www.jianshu.com/u/5dc678c15567" />
        </div>
        {/* 向右滚动按钮动效 */}
        <ScrollArrowButton direction="right" scroll={scroll} />
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, 'blog');
