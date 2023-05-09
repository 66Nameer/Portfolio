import {
    mobile,
    backend,
    creator,
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
    meta,
    starbucks,
    tesla,
    shopify,
    face,
    imageprocessing,
    automation,
    filtering,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "progress",
      title: "Progress",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Face Recognition",
      description:
        "Front-end React Js application that recognizes faces in an image using Clarifai API",
      level: "Advanced",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "red-text-gradient",
        },
        {
          name: "Clarifai API",
          color: "yellow-text-gradient"
        }
      ],
      image: face,
      source_code_link: "https://github.com/66Nameer/Face-Recognition-Front-End",
    },
    {
      name: "Image Processing",
      description:
        "An image processing application that merges two images, and can do edge detection",
      level: "Intermediate",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
      ],
      image: imageprocessing,
      source_code_link: "https://github.com/66Nameer/Image-Filter",
    },
    {
      name: "Robo-Friends",
      description:
        "Simple react card filtering application. Used as a basis to learn React Js",
      level: "Beginner",
      tags: [
        {
          name: 'JavaScript',
          color: 'green-text-gradient'
        },
        {
          name: 'CSS',
          color: 'red-text-gradient'
        },
        {
          name: 'HTML',
          color: 'pink-text-gradient'
        }
      ],
      image: filtering,
      source_code_link: 'https://github.com/66Nameer/robo-friends'
    },
    {
      name: "Tik-Tok Video Downloader",
      description:
        "Automatically download Tik-Tok videos, without watermark, given an acount or hashtag",
      level: "Beginner",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Selenium",
          color: "green-text-gradient",
        },
        {
          name: "BeautifulSoup",
          color: "pink-text-gradient",
        },
      ],
      image: automation,
      source_code_link: "https://github.com/",
    },
  ];

  const progress = [
    {
      name: "JavaScript",
      description:
        "Desc...",
      progressBar: 65,
    },
    {
      name: "Java",
      description:
        "Desc...",
      progressBar: 70,
    },
    {
      name: "Python",
      description:
        "Desc...",
      progressBar: 60,
    },
    {
      name: "C",
      description:
        "Desc...",
      progressBar: 60,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, progress };