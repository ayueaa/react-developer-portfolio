/* eslint-disable no-unused-vars */
import {
  article1,
  article2,
  article3,
  article4,
  article5,
  backend,
  cmb,
  cnpc,
  creator,
  css,
  docker,
  git,
  golang,
  html,
  ipmanage,
  javascript,
  jobit,
  knownsec,
  linux,
  mobile,
  mongodb,
  mysql,
  python,
  reactjs,
  redis,
  redux,
  s360,
  spark,
  tailwind,
  typescript,
  web,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'project',
    title: 'Project',
  },
  {
    id: 'blog',
    title: 'Blog',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Learner',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];
const socials = [
  {
    name: 'github',
    url: 'https://github.com/ayueaa?tab=repositories',
  },
  {
    name: 'twitter',
    url: 'https://github.com/ayueaa?tab=repositories',
  },
  {
    name: 'facebook',
    url: 'https://github.com/ayueaa?tab=repositories',
  },
  {
    name: 'linkedin',
    url: 'https://github.com/ayueaa?tab=repositories',
  },
  {
    name: 'wechat',
    url: 'https://github.com/ayueaa?tab=repositories',
  },
  {
    name: 'tiktok',
    url: 'https://github.com/ayueaa?tab=repositories',
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Golang',
    icon: golang,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Spark',
    icon: spark,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Redis',
    icon: redis,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'typescript',
    icon: typescript,
  },
  {
    name: 'tailwind',
    icon: tailwind,
  },
  {
    name: 'redux',
    icon: redux,
  },
  {
    name: 'antd',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
];

export const skills = [
  {
    Stack: 'Backend', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
  {
    Stack: 'Frontend/Design',
    progressPercentage: '50',
  },
];

const experiences = [
  {
    title: 'Documentation Engineer',
    company_name: 'CNPC',
    icon: cnpc,
    iconBg: '#E6DEDD',
    date: 'Sep 2015 - May 2019',
    points: ['Python automation for file management and supplies calculation', 'Technical support'],
  },
  {
    title: 'Data Engineer',
    company_name: 'CMB',
    icon: cmb,
    iconBg: '#E6DEDD',
    date: 'Sep 2019 - Nov 2020',
    points: [
      'Backend design and development of application systems, including Django, Flask, Tornado',
      'Data ETL process handling',
      'Providing data query microservices API',
    ],
  },
  {
    title: 'Senior Python Engineer',
    company_name: 'Knownsec',
    icon: knownsec,
    iconBg: '#E6DEDD',
    date: 'Nov 2020 - Mar 2022',
    points: [
      'Backend RESTful API development for B2B products',
      'App backend development',
      'Setting up CI/CD Pipeline',
    ],
  },
  {
    title: 'Backend Development Specialist',
    company_name: '360',
    icon: s360,
    iconBg: '#E6DEDD',
    date: 'Mar 2022 - Present',
    points: ['Spark Data processing', 'Intelligence data flow management', 'Scrapy | FastAPI | Kafka | Spark | React'],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Malicious IP Backend',
    description:
      'A backend implementation of an IP management platform, developed using FastAPI, JWT authentication, and MongoDB. It serves as the backend code repository for a frontend-backend separated project',
    tags: [
      {
        name: 'python',
        color: 'text-blue-500', // 蓝色
      },
      {
        name: 'mongodb',
        color: 'text-green-500', // 绿色
      },
      {
        name: 'fastapi',
        color: 'text-pink-500', // 粉红色
      },
    ],
    image: ipmanage,
    source_code_link: 'https://github.com/ayueaa/fastapi-ip-manage',
  },
  {
    name: 'Malicious IP Frontend',
    description:
      'A backend implementation of an IP management platform, developed using FastAPI, JWT authentication, and MongoDB. It serves as the backend code repository for a frontend-backend separated project',
    tags: [
      {
        name: 'scrapy',
        color: 'text-purple-500', // 紫色
      },
      {
        name: 'react',
        color: 'text-cyan-500', // 青色
      },
      {
        name: 'scrapyd',
        color: 'text-yellow-500', // 黄色
      },
    ],
    image: ipmanage,
    source_code_link: 'https://github.com/ayueaa/fastapi-ip-manage',
  },
  {
    name: 'Spider&Manage',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'text-cyan-500', // 青色
      },
      {
        name: 'antd',
        color: 'text-red-500', // 红色
      },
      {
        name: 'react-redux',
        color: 'text-orange-500', // 橙色
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
];

const blogs = [
  {
    title: 'Gitlab-CI使用及.gitlab-ci.yml配置入门一篇就够了',
    description:
      'Gitlab-CI/CD 持续集成测试篇\n\t一、 Gitlab-CI/CD使用场景\n\t首先，公司使用Gitlab作为工作仓库进行代码发布及版本控制，Gitlab内置了CI/CD的工具，这些工具可以用于代码提交的同时完成镜像构建、自动化测试、自动化部署等连续的工作...',
    wordCount: 1030,
    readCount: 12340,
    tags: [
      {
        name: 'runner',
        color: 'red', // 蓝色
      },
      {
        name: 'gitlab-ci.yml',
        color: 'blue', // 绿色
      },
      {
        name: 'Gitlab-CI/CD',
        color: 'yellow', // 粉红色
      },
    ],
    image: article1,
    articleLink: 'https://www.jianshu.com/p/4cc441b1c8a3',
  },
  {
    title: 'Streamlit如何跳转第三方页面实现登陆鉴权',
    description:
      'Python可以使用streamlit框架实现0前端代码，全栈开发数据大屏等简单的可交互可视化web项目。普通登陆可以使用streamlit-authenticator第三方包轻松实现。该文章主要记录了在使用streamlit需要跳转第三方cas页面进行登陆的情况...',
    wordCount: 544,
    readCount: 4156,
    tags: [
      {
        name: 'streamlit',
        color: 'red', // 蓝色
      },
      {
        name: 'python',
        color: 'blue', // 绿色
      },
      {
        name: 'cas-auth',
        color: 'yellow', // 粉红色
      },
    ],
    image: article2,
    articleLink: 'https://www.jianshu.com/p/dc8d3f12b58c',
  },
  {
    title: '分布式、多节点系统下定时任务重复执行问题解决方案',
    description:
      '在分布式系统或多worker环境下，确保后端任务（如由apscheduler)只执行一次。这通常需要外部数据库支持,通过创建带有唯一字段的自定义表,可以实现锁机制。可以通过装饰器改造现有函数，以支持分布式环境。这种方法适用于不同语言和后端框架及后台定时任务...',
    wordCount: 958,
    readCount: 6400,
    tags: [
      {
        name: 'python',
        color: 'red', // 蓝色
      },
      {
        name: 'distributed-lock',
        color: 'blue', // 绿色
      },
      {
        name: 'unique-key',
        color: 'yellow', // 粉红色
      },
    ],
    image: article3,
    articleLink: 'https://www.jianshu.com/p/756e44495cb4',
  },
  {
    title: 'Spark中广播变量的使用: When,Why,How',
    description:
      '在Spark中，广播变量（Broadcast Variables）是一种用于将大型数据集或对象有效传递给所有集群节点的机制。本文将介绍如何使用广播变量以及何时应该使用它们，还将使用pyspark讨论如何在数据库连接池中使用广播变量。...',
    wordCount: 670,
    readCount: 200,
    tags: [
      {
        name: 'pyspark',
        color: 'red', // 蓝色
      },
      {
        name: 'broadcast-variables',
        color: 'blue', // 绿色
      },
      {
        name: '连接池',
        color: 'yellow', // 粉红色
      },
    ],
    image: article4,
    articleLink: 'https://www.jianshu.com/p/11cb5303421d',
  },
  {
    title: 'go语言resty库并发爬取bing大图实战',
    description:
      '最近完成了《Go语言实战》的阅读。作为实践，决定编写 Go 并发爬虫，采用 restyhttp 请求库和 htmlquery 库进行 HTML 解析。并发控制使用 sync.WaitGroup，目标是爬取必应每日一图，包括分页处理、内容提取和图片下载。这个项目是对新技能的练手应用，探索了 Go 语言的并发特性。',
    wordCount: 774,
    readCount: 1777,
    tags: [
      {
        name: 'golang',
        color: 'red', // 蓝色
      },
      {
        name: 'restyhttp',
        color: 'blue', // 绿色
      },
      {
        name: 'goruntine',
        color: 'yellow', // 粉红色
      },
    ],
    image: article5,
    articleLink: 'https://www.jianshu.com/p/dcd2f0311722',
  },
];

const githubRepos = {
  show: true,
  heading: 'Recent Projects',
  username: 'ayueaa', //i.e."johnDoe12Gh"
  length: 4,
  specfic: [],
};

export { blogs, experiences, githubRepos, projects, services, socials, technologies, testimonials };
