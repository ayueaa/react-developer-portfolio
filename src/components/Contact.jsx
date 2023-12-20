import { send } from '@emailjs/browser';
import { message } from 'antd';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const EmailJsSettings = {
  ServiceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TemplateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const Contact = () => {
  const formRef = useRef();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    console.log(form.name);

    send(
      EmailJsSettings.ServiceID,
      EmailJsSettings.TemplateID,
      {
        from_name: form.name,
        to_name: 'Yue',
        from_email: form.email,
        message: form.message,
      },
      EmailJsSettings.PublicKey,
    ).then(
      () => {
        setLoading(false);
        message.success(t('contact.sendSuccess'));

        setForm({
          name: '',
          email: '',
          message: '',
        });
      },
      error => {
        setLoading(false);

        console.error(error);
        message.error(t('contact.sendFail'));
      },
    );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 bg-opacity-20 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t('contact.title')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.subTitle')}</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.form.name')}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.form.defaultName')}
              className="bg-tertiary py-4 px-6 text-[#EEEEEE] bg-opacity-30 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.form.email')}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.form.defaultEmail')}
              className="bg-tertiary py-4 px-6 text-[#EEEEEE] bg-opacity-30 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t('contact.form.message')}</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.form.defaultMessage')}
              className="bg-tertiary py-4 px-6 text-[#EEEEEE] bg-opacity-30 rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary bg-opacity-50 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold"
          >
            {loading ? t('contact.sendLoading') : t('contact.send')}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
