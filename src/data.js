export const portfolioData = {
  // --- Paste the entire JSON object provided in the prompt here ---
  "fontFamily": "monospace", // We'll override this with Tailwind theme
  "navList": ["About", "Skills", "Projects", "Contact"], // Added "Home" implicitly via Hero
  "about": {
    "fname": "Sachin",
    "lname": "A S",
    "occ": "Software Engineer", // Capitalized for display
    "primary": "Hi I'm Sachin A S. I'm a software engineer based in Bengaluru. I'm passionate about building applications and learning new technologies. In my spare time I love to play badminton, reading and listening to music.",
    "secondary": "I'm a 2024 computer science graduate from Vemana Institute of Technology. I have gained practical experience through academics and personal projects. I'm proficient in Javascript, Golang, Node.js, ReactJs, C++, MongoDB, and PostgreSQL. I have experience with Git and SQL. I'm passionate about software development and eager to learn and contribute to a team." // Refined slightly based on resume context
  },
  "skills": {
    "skillList": [
      { "name": "JavaScript", "image": "https://i.pinimg.com/736x/af/1f/b4/af1fb4e8700c6aa2c5b8d3e915eb6e99.jpg", "exp": 1, "add": true },
      { "name": "ReactJs", "image": "https://i.pinimg.com/736x/3f/26/40/3f2640efdb2a1805ebbdef5e3d373937.jpg", "exp": 1, "add": true },
      { "name": "NodeJs", "image": "https://i.pinimg.com/736x/5e/da/8d/5eda8d1a06e57a7789581bb22a37cab3.jpg", "exp": 1, "add": true },
      { "name": "ExpressJs", "image": "https://i.pinimg.com/736x/10/6d/23/106d230fb2dfec7d1fec8614ffa8fa3e.jpg", "exp": 1, "add": true },
      { "name": "Golang", "image": "https://i.pinimg.com/736x/09/ce/62/09ce62889fc7b51ee68835ac7a2340f8.jpg", "exp": 1, "add": true },
      { "name": "C++", "image": "https://i.pinimg.com/236x/ff/03/e2/ff03e272b99f9aa0b467289a98b63084.jpg", "exp": 1, "add": true },
      { "name": "Python", "image": "https://i.pinimg.com/736x/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.jpg", "exp": 1, "add": true }, // Included from JSON
      { "name": "MongoDb", "image": "https://i.pinimg.com/236x/e8/ab/b4/e8abb49f605c7f61553c8268ef0a56aa.jpg", "exp": 1, "add": true },
      // { "name": "PostgreSQL", "image": "URL_TO_POSTGRES_ICON", "exp": 1, "add": true }, // Add if you have an image URL
      { "name": "HTML", "image": "https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg", "exp": 1, "add": false },
      { "name": "CSS", "image": "https://i.pinimg.com/736x/75/e4/d6/75e4d6d5a0f6b8f4e4030f9b00511ca7.jpg", "exp": 1, "add": false },
      { "name": "Angular", "image": "https://i.pinimg.com/236x/e6/f3/20/e6f3204bd34862cd764314637857e193.jpg", "exp": 1, "add": true }, // Included from JSON
      { "name": "GIT", "image": "https://i.pinimg.com/736x/a9/5a/ad/a95aadde4325065401dc6942ea5dad90.jpg", "exp": 1, "add": true }
    ]
  },
  "projects": [ // Merged project details from both sources for completeness
    {
      "name": "AskDb",
      "description": "An AI chatbot enables users to interact with databases using natural language, eliminating the need for complex queries. The chatbot converts user input into queries, and retrieves relevant results.",
      "image": "https://via.placeholder.com/300x200.png?text=AskDb", // Placeholder - add actual image if available
      "link": "",
      "githublink": "https://github.com/sachinaralapura/AskDb.git",
      "skills": ["NodeJs", "ExpressJs", "Gemini AI API", "JavaScript"]
    },
    {
      "name": "Shoebill",
      "description": "Shoebill is a custom interpreter built in Go, implementing a C-like syntax with modern features like variable bindings, integers, booleans, arithmetic expressions, built-in functions, strings, arrays, hashes, first-class/higher-order functions, and closures, using Pratt parsing.", // Combined descriptions
      "image": "https://i.pinimg.com/736x/93/a3/35/93a335b598444d1284b6ddee118ebafd.jpg",
      "link": "",
      "githublink": "https://github.com/sachinaralapura/Shoebill",
      "skills": ["Golang", "Interpreter", "Parsing", "Lexing", "Pratt Parsing"] // Adjusted skills
    },
    {
      "name": "GComments",
      "description": "This VS Code extension leverages Ollama AI models to effortlessly generate comprehensive comments for your code, enhancing maintainability and readability.",
      "image": "https://i.pinimg.com/1200x/bd/d1/a1/bdd1a136d1bd0837854c4ddd58b5d0d0.jpg",
      "link": "", // Add marketplace link if available
      "githublink": "https://github.com/sachinaralapura/gcommet.git", // Corrected URL format
      "skills": ["TypeScript", "JavaScript", "VS Code API", "Ollama", "GIT"] // Adjusted skills
    },
    {
      "name": "SkyCast",
      "description": "Effortlessly retrieve detailed weather information for any location across the globe. Utilizing the robust Open-Meteo API, provides in-depth forecasts.",
      "image": "https://via.placeholder.com/300x200.png?text=SkyCast", // Placeholder
      "link": "",
      "githublink": "", // Add link if available
      "skills": ["ReactJs", "JavaScript", "CSS", "HTML", "API"]
    },
    {
      "name": "FlickList",
      "description": "Built to enhance your movie discovery and watchlist management experience. It leverages the OMDB API to provide a user-friendly interface for Browse movies, searching, and creating your personal movie watchlist.",
      "image": "https://via.placeholder.com/300x200.png?text=FlickList", // Placeholder
      "link": "",
      "githublink": "", // Add link if available
      "skills": ["ReactJs", "TypeScript", "CSS", "HTML", "OMDB API"]
    },
    // --- Include other projects from the JSON similarly ---
    {
      "name": "QuizWhiz",
      "description": "An engaging quiz application using a Restful API and Axios to dynamically fetch diverse questions, potentially including a scoring system.", // Slightly rephrased
      "image": "https://i.pinimg.com/736x/43/85/4d/43854d48702c71afa673b160aadddfde.jpg",
      "link": "",
      "githublink": "https://github.com/sachinaralapura/React-quiz.git",
      "skills": ["React", "GIT", "HTML", "CSS", "JS", "Axios", "API"]
    },
    {
      "name": "ToDone",
      "description": "A streamlined task management application with JWT authentication for security and MongoDB for data storage.", // Slightly rephrased
      "image": "https://i.pinimg.com/736x/00/11/9b/00119bff7b33010bd5ccbea97aa2d36a.jpg",
      "link": "",
      "githublink": "https://github.com/sachinaralapura/TODO.git",
      "skills": ["Angular", "JWT", "MongoDb", "NodeJs", "ExpressJs"] // Added likely backend skills
    },
    {
      "name": "NovelNest",
      "description": "A BookStore MERN Application providing a seamless experience for managing and exploring books using MongoDB, Express, React, and Node.js.",
      "image": "https://i.pinimg.com/236x/74/bf/8b/74bf8b39f26e126c2ed12c86f6a2067a.jpg",
      "link": "",
      "githublink": "https://github.com/sachinaralapura/NovelNest.git", // Assumed HTTPS link
      "skills": ["React", "NodeJs", "ExpressJs", "MongoDb", "MERN"]
    },
    {
      "name": "Calculator",
      "description": "A fully functional, modern calculator built with HTML, CSS, and JavaScript for basic and advanced operations.",
      "image": "https://i.pinimg.com/236x/72/7d/58/727d58554ce1c37412914d14c7951ad0.jpg",
      "link": "https://sachinaralapura.github.io/WSA/Projects/Calculator/level2/",
      "githublink": "https://github.com/sachinaralapura/WSA/tree/main/Projects/Calculator/level2",
      "skills": ["HTML", "CSS", "JavaScript"]
    },
    {
      "name": "Image carousel",
      "description": "An elegant, interactive image carousel component built using HTML, CSS, and JavaScript with smooth transitions and controls.",
      "image": "https://i.pinimg.com/236x/da/1d/b1/da1db1452129ce8557f08c8983403752.jpg",
      "link": "https://sachinaralapura.github.io/WSA/Projects/image_slider/level2/",
      "githublink": "https://github.com/sachinaralapura/WSA/tree/main/Projects/image_slider/level2",
      "skills": ["HTML", "CSS", "JavaScript"]
    }
    // --- Expenzo project was missing skills, add them if known ---
    // {
    //   "name": "Expenzo",
    //   "description": "A comprehensive financial management system for tracking expenses, monitoring accounts, and controlling financial well-being.",
    //   "image": "https://i.pinimg.com/236x/0b/35/09/0b350904e322e07965177e321a148889.jpg",
    //   "link": "",
    //   "githublink": "https://github.com/sachinaralapura/Financial-management-system.git",
    //   "skills": ["BackendLang?", "FrontendLang/Framework?", "Database?"] // Add actual skills
    // },
  ],
  "contact": {
    "social": [
      { "platform": "LinkedIn", "link": "https://www.linkedin.com/in/sachin-as-25692320a/", "img": "", "add": true },
      { "platform": "GitHub", "link": "https://github.com/sachinaralapura", "img": "", "add": true },
      { "platform": "HackerRank", "link": "https://www.hackerrank.com/sachin_aralapura", "img": "https://i.pinimg.com/236x/5d/84/93/5d84930516cac6c802a95671c9acf511.jpg", "add": true },
      { "platform": "tel", "link": "+917019928531", "img": "", "add": true }
      // Add Email if desired:
      // { "platform": "email", "link": "mailto:your.email@example.com", "img": "", "add": true }
    ]
  }
};