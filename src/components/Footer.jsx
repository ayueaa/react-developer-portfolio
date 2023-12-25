// Footer.jsx
import React from 'react';

const Footer = () => {
  const websiteName = '技能画廊';
  const icpNum = '蜀ICP备2023042327号';
  const icpSrc = 'https://beian.miit.gov.cn';
  const currentYear = new Date().getFullYear(); // 获取当前年份

  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <div className="text-center text-xs mb-2">
        ©{currentYear} {websiteName} |{' '}
        <a href={icpSrc} target="_blank" rel="noopener noreferrer" className="text-xs">
          {icpNum}
        </a>
      </div>
      <div className="text-center text-xs">
        版权所有 &copy; {currentYear} {websiteName}. 保留一切权利。
      </div>
    </footer>
  );
};

export default Footer;
