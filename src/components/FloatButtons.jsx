import { FloatButton } from 'antd';
import { useTranslation } from 'react-i18next';

import { message, setting, star, toup, translate } from '../assets';
import { thisProject } from '../constants';

// 全局悬浮按钮
const PageFloatButtons = () => {
  // 嵌入国际化中英文切换按钮
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';

    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <FloatButton.Group
        trigger="click"
        style={{ opacity: 0.7 }}
        icon={<img src={setting} />}
        tooltip={t('floatButton.mainTip')}
      >
        <FloatButton icon={<img src={translate} />} onClick={toggleLanguage} tooltip={t('floatButton.transTip')} />
        <FloatButton
          icon={<img src={star} />}
          tooltip={t('floatButton.starTip')}
          href={thisProject.githubLink}
          target="_bank"
        />
        <FloatButton icon={<img src={message} />} tooltip={t('floatButton.emailTip')} href="#contact" />
        <FloatButton.BackTop icon={<img src={toup} />} visibilityHeight={0} tooltip={t('floatButton.topTip')} />
      </FloatButton.Group>
    </div>
  );
};

export { PageFloatButtons };
