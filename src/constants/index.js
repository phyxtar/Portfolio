import {
  mobile,
  backend,
  creator,
  wordpress,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  wordpressi,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sea,
  tas,
  alegar,
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
    title: 'MERN Stack Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'WordPress Developer',
    icon: wordpress,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'wordpress',
    icon: wordpressi,
  },
];

const experiences = [
  {
    title: 'MERN Stack Developer',
    company_name: 'Elevera Technologies',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Feb 2020 - Dec 2022',
    points: [
      'Developing and maintaining web applications using React.js & Nodejs and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer & Wordpress Developer',
    company_name: 'Elevera Technologies',
    icon: starbucks,
    iconBg: '#E6DEDD',
    // date: 'Jan 2021 - Feb 2022',
    points: [
      'Design and establish User- Friendly Website, Including optimize checkout-page resulting in a 25% increase in user clicks and subsequently 33% in customer purchases',
      'Provide adequate training to 60+ staff members and 20+ junior web developers in internal web functions, including steps on how to make minior updates/chnages independently.',
      'Establish an interactive and dynamic website that guarantees high traffic, page views, and maximum user experience, generating a 45 % increase in the companys sales revenue.',
      'Conceptualize and enforce a server that accellerated document generation as well as the search - Functionality of current websites by 15%, garnering consistant, commendation and award from the top management.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Innovateurs',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Freelancer (Present)',
    points: [
      'Used various technologies. inclucing JavaScript to make code repairs and optimize coporate website.',
      'Determined coding requirements for site creation, including e-commerce capability and security ans specialized scripts.',
      'Tested websites and performed user testing and troubleshooting prior to live deployment.',
      'Analyzed and implemented software applications for multiple websites.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Innovateurs',
    icon: shopify,
    iconBg: '#E6DEDD',

    points: [
      'Managed 15+ web design projects from start to finish using HTML5,JavaScript, and CSS3 with 100% client satisfaction.',

      'Designed and allocated interactive flyers and ads on the site for upcoming promotions and events, increasing site visits by 25%.',
      'Implementing responsive design and ensuring cross-browser compatibility.',

      'Redesigned 3 websites for top brands using a content management system, driving UX results by 20% and customer retention rate by 10%.',

      'Managed all aspects of professional website design focusing on overall site navigation and information architecture for 30+ commercial and personal websites.',

      'Created 5+ responsive websites and custom graphic sets for clients, achieving a 100% client satisfaction rate.',

      'Delivered a wide range of web services to include web editing, multimedia animation, virtual postcards, flash sites, and interface design.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Sea Trials',
    description:
      'Web-based platform that helps users to study and PASS the U.S. Coast Guard DECK & ENGINE Exams for ALL ratings. This is similar to Upgrade U but brought into the future! Website and App sync all bookmarks and resume functionality! Printable tests! Updated Questions!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'red',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: sea,
    source_code_link: 'https://seatrials.net/',
  },
  {
    name: 'Tassigns',
    description:
      'Web application that enables users to search for a full range of products and services which include: Custom Decorate Apparel (Screen Printing & Embroidery) Signs, Displays, Banners & Flags Decals/Stickers/Labels Promotional Items ...and much more!',
    tags: [
      {
        name: 'HTML5',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'DecoNetwork',
        color: 'blue-text-gradient',
      },
    ],
    image: tas,
    source_code_link: 'https://www.tassigns.com/',
  },
  {
    name: 'Alegar Corp',
    description:
      'A comprehensive E-commerce website build in wordPress technology which helps user or customer to buy Cannabies related products , The company AlegarCorp basically deal whih cannabies products such as - Child Resistant Tins , Displays, Promotional Products & Merchandise and etc...',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'WordPress',
        color: 'blue-text-gradient',
      },
    ],
    image: alegar,
    source_code_link: 'https://alegarcorp.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
