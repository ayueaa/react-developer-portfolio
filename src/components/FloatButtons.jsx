import { MailOutlined, PlusOutlined, StarOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import { thisProject } from '../constants';

// 全局悬浮按钮
const PageFloatButtons = () => {
  return (
    <div>
      <FloatButton.Group trigger="click" style={{ opacity: 0.7 }} icon={<PlusOutlined className="text-[#0d374ffc]" />}>
        <FloatButton
          icon={<StarOutlined className="text-yellow-500" />}
          tooltip="Star me on GitHub!"
          href={thisProject.githubLink}
          target="_bank"
        />
        <FloatButton icon={<MailOutlined className="text-blue-500" />} tooltip="Contact me!" href="#contact" />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </div>
  );
};

export default PageFloatButtons;
