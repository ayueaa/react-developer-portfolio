import { DoubleLeftOutlined, DoubleRightOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';

import { blogs } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const BlogCard = ({ index, title, description, wordCount, readCount, tags, image, articleLink }) => {
  // options={{ max: 45, scale: 1, speed: 450 }}
  //       className="bg-card p-5 rounded-2xl sm:w-[310px] w-full"
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} onClick={() => window.open(articleLink, '_blank')}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#e8f1f5] p-5 rounded-2xl sm:w-[350px] w-full"
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
            Words: {wordCount} | Reads: {readCount}
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
        <p className={styles.sectionSubText}>My Blogs</p>
        <h2 className={styles.sectionHeadText}>Blogs.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
          My blog delves into meaningful problem-solving approaches, learning new technologies and languages, with a
          focus on databases, big data, and backend frameworks. Primarily centered around Python, the posts offer
          insightful examples and discussions. These articles serve as a resource for those interested in innovative
          solutions and the exploration of emerging tech trends in the programming world.
        </motion.p>
      </div>
      <div className="relative mt-20 flex">
        {/* 向左滚动按钮动效 */}
        <motion.div
          animate={{ x: [-10, 10, -10] }} // 水平方向动画
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="scroll-arrow left"
          onClick={() => scroll('left')}
        >
          <Button type="text" className="text-white" icon={<DoubleLeftOutlined />} />
        </motion.div>
        <div className="mt-20 flex overflow-x-auto" id="scroll-container" constyle={{ height: '520px' }}>
          {' '}
          {/* 设置足够的高度 */}
          {blogs.map((blog, index) => (
            <div className="inline-block mr-8 last:mr-0" key={`project-${index}`}>
              {' '}
              <BlogCard index={index} {...blog} />
            </div>
          ))}
          {/* Read More 按钮+动效 */}
          <motion.div
            className="inline-flex items-center"
            animate={{ x: [0, 5, 0] }} // 水平方向动画
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            <Button
              type="link"
              icon={<FileSearchOutlined />}
              size="large"
              onClick={() => {
                window.open('https://www.jianshu.com/u/5dc678c15567', '_blank');
              }}
              className="text-white"
            >
              <p>Read More.</p>
            </Button>
          </motion.div>
        </div>
        {/* 向右滚动按钮动效 */}
        <motion.div
          animate={{ x: [10, -10, 10] }} // 水平方向动画
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="scroll-arrow right"
          onClick={() => scroll('right')}
        >
          <Button type="text" className="text-white" icon={<DoubleRightOutlined />} />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, 'blog');
