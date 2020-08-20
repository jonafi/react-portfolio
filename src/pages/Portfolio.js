import React from "react";
import Project from "../components/Project"


const collection = [
  {
    id: 1,
    name: "Eat-Da-Burger",
    url: "https://john-ferro-burger.herokuapp.com",
    thumbnail: "/assets/burger.jpg",
    description: "Heroku hosted app that utilizes a MySql database, Node Express routes, and MVC framework.",
    repository:"https://github.com/jonafi/burger"
  },
  {
    id: 2,
    name: "Stock Portfolio Tracker",
    url: "https://team-caribou.herokuapp.com/",
    thumbnail: "/assets/spt.jpg",
    description: "Group project built with Sequelize, Handlebars, Passport.js on a MVC framework.",
    repository:"https://github.com/jonafi/stock-portfolio-tracker"
  },
  {
    id: 3,
    name: "Quarantine Eats",
    url: "https://jonafi.github.io/quarantine-eats",
    thumbnail: "/assets/qe.jpg",
    description: "Group project that implemented 2 different APIs, Materialize CSS, and advanced Git collaboration tools.",
    repository:"https://github.com/jonafi/quarantine-eats"
  },
  {
    id: 4,
    name: "Weather Dashboard",
    url: "https://jonafi.github.io/weather-dashboard",
    thumbnail: "/assets/wd.jpg",
    description: "Unit 6 - Multiple API calls, utilizes localStorage, Bootstrap mobile-first design.",
    repository:"https://github.com/jonafi/weather-dashboard"
  },
  {
    id: 5,
    name: "Code Quiz",
    url: "https://jonafi.github.io/code-quiz",
    thumbnail: "/assets/cq.jpg",
    description: "Unit 4 - Vanilla javaScript DOM manipulation and event listeners.",
    repository:"https://github.com/jonafi/code-quiz"
  },
  {
    id: 6,
    name: "Employee CMS",
    url: "",
    thumbnail: "/assets/ecms.jpg",
    description: "Command line interface, uses MySQL and Inquirer",
    repository:"https://github.com/jonafi/employee-cms"
  },
  {
    id: 7,
    name: "GitHub",
    url: "",
    thumbnail: "/assets/github.jpg",
    description: "See all of my works-in-progress.",
    repository:"https://github.com/jonafi"
  },
  
];



  function Portfolio() {
    console.log(Project);

    return ( <Project project={collection} />);
 



  }


export default Portfolio;
