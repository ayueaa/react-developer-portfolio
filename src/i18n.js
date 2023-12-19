import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpApi) // 加载翻译文件
  .use(LanguageDetector) // 浏览器语言检测
  .use(initReactI18next) // 初始化react-i18next
  .init({
    supportedLngs: ['en', 'zh'], // 支持的语言
    fallbackLng: 'en', // 默认语言
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // 路径到你的语言包
    },
  });

export default i18n;
