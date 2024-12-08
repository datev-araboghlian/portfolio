export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Sarah',
    position: 'Small Business Owner',
    img: 'assets/review1.png',
    review:
      'Datev created an amazing website for my small business. The design is modern and user-friendly, and it has helped increase my online presence significantly. Very professional and responsive throughout the project.',
  },
  {
    id: 2,
    name: 'Michael',
    position: 'Startup Founder',
    img: 'assets/review2.png',
    review:
      'Working with Datev was a great experience. They understood our vision perfectly and delivered a website that exceeded our expectations. Their attention to detail and technical expertise are impressive.',
  },
  {
    id: 3,
    name: 'Lisa',
    position: 'Digital Marketing Manager',
    img: 'assets/review3.png',
    review:
      'Datev helped us revamp our company website, making it more responsive and SEO-friendly. The results have been fantastic, with improved user engagement and higher conversion rates.',
  }
];

export const myProjects = [
  {
    title: 'Minesweeper Game',
    desc: 'A classic Minesweeper game implementation with customizable grid sizes and difficulty levels.',
    subdesc: 'Built with React and modern JavaScript, featuring a clean UI and intuitive controls.',
    href: 'https://github.com/datev-araboghlian/minesweeper',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'HTML5',
        path: '/assets/html.svg',
      },
      {
        id: 2,
        name: 'CSS3',
        path: '/assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
      {
        id: 4,
        name: 'React.js',
        path: '/assets/react.svg',
      }
    ],
  },
  {
    title: '2048 Game',
    desc: 'A recreation of the popular 2048 puzzle game with smooth animations and score tracking.',
    subdesc: 'Implemented using vanilla JavaScript with a focus on game logic and user experience.',
    href: 'https://github.com/datev-araboghlian/2048-game',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/javascript.svg',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'HTML5',
        path: '/assets/html.svg',
      }
    ],
  },
  {
    title: 'Tic Tac Toe',
    desc: 'A modern take on the classic Tic Tac Toe game with a minimalist design and multiplayer support.',
    subdesc: 'Created with React, featuring AI opponent options and win streak tracking.',
    href: 'https://github.com/datev-araboghlian/tic-tac-toe',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#1A1C27',
      background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'HTML5',
        path: '/assets/html.svg',
      },
      {
        id: 3,
        name: 'CSS3',
        path: '/assets/css.svg',
      }
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    // Adjust desk scale for more responsive sizing
    deskScale: isSmall ? 0.04 : isMobile ? 0.05 : isTablet ? 0.06 : 0.065,
    
    // Fine-tune desk positioning for different screen sizes
    deskPosition: isSmall 
      ? [0.1, -4, 0] 
      : isMobile 
        ? [0.3, -4.5, 0] 
        : isTablet 
          ? [0.2, -5, 0] 
          : [0.25, -5.5, 0],
    
    // Adjust cube, logo, rings, and target positions
    cubePosition: isSmall 
      ? [3, -4.5, 0] 
      : isMobile 
        ? [4, -5, 0] 
        : isTablet 
          ? [4.5, -5, 0] 
          : [9, -5.5, 0],
    
    reactLogoPosition: isSmall 
      ? [2.5, 3.5, 0] 
      : isMobile 
        ? [4, 4, 0] 
        : isTablet 
          ? [4.5, 4, 0] 
          : [12, 3, 0],
    
    ringPosition: isSmall 
      ? [-4, 6, 0] 
      : isMobile 
        ? [-8, 9, 0] 
        : isTablet 
          ? [-10, 9.5, 0] 
          : [-24, 10, 0],
    
    targetPosition: isSmall 
      ? [-4, -9, -10] 
      : isMobile 
        ? [-7, -9.5, -10] 
        : isTablet 
          ? [-9, -8, -10] 
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    name: "Freelance",
    pos: "Self-Employed",
    icon: "assets/python.svg",
    duration: "Jan 2023 - Present",
    title: "Developing and maintaining web applications for various clients using React.js and other modern technologies",
    animation: "salute"
  },
  {
    name: "Tech Solutions Ltd",
    pos: "Frontend Developer",
    icon: "assets/html.svg",
    duration: "Jun 2022 - Dec 2022",
    title: "Building and maintaining responsive web applications using React.js and related technologies",
    animation: "clapping"
  },
  {
    name: "Digital Agency",
    pos: "Web Designer/Developer",
    icon: "assets/javascript.svg",
    duration: "Jan 2022 - May 2022",
    title: "Creating modern and user-friendly website designs using Figma and Adobe Creative Suite",
    animation: "victory"
  }
];
