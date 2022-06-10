import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
  title: 'angela johnson | web dev',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'The website of Angela Johnson, a web developer based in Melbourne, Australia.', // e.g: Welcome to my website
};

// NAV DATA
export const navData = {
  links: [
    {
      id: nanoid(),
      name: 'about',
      url: '#about'
    },
    {
      id: nanoid(),
      name: 'projects',
      url: '#projects'
    },
    {
      id: nanoid(),
      name: 'digital-garden',
      url: '#digital-garden'
    },
    {
      id: nanoid(),
      name: 'contact',
      url: '#contact'
    }
  ],
};

// HERO DATA
export const heroData = {
  title: 'Hi there.',
  name: 'AJ',
  subtitle: 'I develop things for the web.',
  cta: 'Explore',
  resume: 'Resume'
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    // portfolio
    id: nanoid(),
    img: 'project1.png',
    title: 'PORTFOLIO WEBSITE (v2)',
    info: 'JavaScript, React, Gatsby, Bootstrap, HTML/CSS',
    info2: `This is a v2.0 of my original portfolio website, which was built with basic HTML/CSS last year. It contains my project pieces, a bit about me, my contact info and a downloadable resume. I built it with Gatsby and React and leveraged features like dynamic images, hooks, components and much more. This project has given me a great amount of knowledge about styling and learning more about the mystery that was Bootstrap to me, previously.  `,
    info3: `Future plans: I am a huge fan of node-based thinking & research (i.e.networked thought). I have used tools like Roam Research & Remnote for years and write daily. My entire software engineering journey is encapsulated in them. I think it would be neat to incorporate a digital garden on this site that exemplifies my changing thought processes over time on things that do (and perhaps don't) matter to me.`,
    url: 'www.angelajohnson.dev',
    repo: 'https://github.com/angieloux/portfolio-v2', // if no repo, the button will not show up
  },
  {
    // todo app
    id: nanoid(),
    img: 'project2.png',
    title: 'TO-DO APP',
    info: 'JavaScript, React, HTML/CSS',
    info2: `This is a simple to-do app that helps its users keep track of things they need to get done. I built this app as a part of my ongoing learning with React.`,
    info3:`I had built simple React apps previously using class components, and I wanted to understand how to manipulate state via hooks so this is why I did this project. I used the useEffect and useState hooks particularly so to allow a user to add, remove, tick off and filter to-do items meaningfully. It's styled simply with CSS.`,
    url: 'https://ajs-todo-app.netlify.app/',
    repo: 'https://github.com/angieloux/todo-app', // if no repo, the button will not show up
  },
  {
    // weather app
    id: nanoid(),
    img: 'project3.png',
    title: 'WEATHER APP',
    info: 'JavaScript, HTML/CSS, Weather API',
    info2: `This simple weather app was created with vanilla JavaScript. It simply fetches weather data from the Weather API based on the user's latitude & longitude and meaningfully displays it. I made use of animated Skycons and conditionally rendered these based on weather conditions at the user's location. `,
    info3: `It also features a clickable temperature that toggles between fahrenheit and celsius. I did this project to get a basic understanding of fetching data from an API, how to display that data & what could be done with it using event listeners and handlers.`,
    url: 'https://ajs-weather-app.netlify.app/',
    repo: 'https://github.com/angieloux/weather-app', // if no repo, the button will not show up
  },
  {
    // 2 sided marketplace
    id: nanoid(),
    img: 'project4.jpeg',
    title: 'FARMERS MARKETPLACE',
    info: 'Ruby on Rails, Devise authentication, Stripe, AWS (S3), PostgreSQL',
    info2: `Farmers marketplace is a two-sided marketplace created in Ruby on Rails. I was inspired to make this after competing in the Hacking for Humanity hackathon with Girls in Tech Australia in 2021. The purpose of the app is to re-distribute food that would otherwise be wasted by creating a neighbourhood markplace for it to be listed and sold. Creating this app enabled me to get more of a grasp on the aptly name Rails ✨magic✨, and what exactly the functionality of high-level components within MVC architecture are and how they work (e.g. active record associations, database relations, how the model view and controller interact, etc). It uses AWS (S3) for image storage & PostgreSQL as the database for storing listings. Styling was not included as it was beyond the scope of the assignment, but I'd love to build it out in the future fully.`,
    url: '',
    repo: 'https://github.com/angieloux/farmers-marketplace', // if no repo, the button will not show up
  },
  {
    // hackathon
    id: nanoid(),
    img: 'project7.png',
    title: 'HACKATHON: HACKING FOR HUMANITY',
    info: '',
    info2: `Girls in Tech Australia joined up with numerous charities that are combating climate breakdown in three areas: energy, conservation and waste. The purpose of the hack was to solve a problem one of these charities were facing as best you could in 48 hours. I chose to align with OzHarvest, one of Australia's leading food rescue organisations. They were looking to have a design overhaul of one particular arm of their business.`,
    info3: `I was project manager of a group of 4, and I also created and presented our solution to ~100 people in the final. I led the team through brainstorming (in Mural), project management (in Asana) and then finally presentation. We all created our solution together in Figma and presented a high-fidelity mockup at judging. It was such an amazing opportunity, I met so many great folks, learnt lots about collaborating and time-management specifically with regard to engineering projects.`,
    url: '',
    repo: '' // if no repo, the button will not show up
  },
  {
    // terminal app
    id: nanoid(),
    img: 'project6.png',
    title: 'AJ RECORDS',
    info: 'Ruby, JSON',
    info2: `This is a quirky little Ruby terminal app I created when I was first starting my coding journey. As the user you can 'visit' the record store, chat up the store assistant, search through vinyl by album, artist or category (stored in a JSON file), and add things to your cart. You can remove things, see your total, buy them, change your mind, try and leave the store and steal them (and get promptly booted by the store attendant) OR you can ask the girl at the counter out on a date (spoiler: you get rejected). I worked at a record store for a long time when I was younger, so I just couldn't help myself.`,
    info3: `I throughouly enjoyed making this app and it taught me well the need for separating concerns, and how to use classes and modules and other means to do just that. I also used a bunch of different gems (tty-prompt, terminal-table, artii, colorize, etc) to enhance the app. I think it would be a fun project to convert over into a Rails or React app.`,
    url: '',
    repo: 'https://github.com/angieloux/aj-records-ruby-terminal-app', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
