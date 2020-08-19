import React from "react";
import Project from "../components/Project"


const collection = [
  {
    id: 1,
    name: "Eat-Da-Burger",
    url: "http://asdg.com",
    thumbnail: "/assets/burger.jpg",
    description: "Heroku hosted app that utilizes a MySql database, Node Express routes, and MVC framework.",
    repository:"http://asdf.com"
  },
  {
    id: 2,
    name: "Eat-Da-Burger",
    url: "http://asdg.com",
    thumbnail: "/assets/cq.jpg",
    description: "Heroku hosted app that utilizes a MySql database, Node Express routes, and MVC framework.",
    repository:"http://asdf.com"
  },
  {
    id: 3,
    name: "Eat-Da-Burger",
    url: "http://asdg.com",
    thumbnail: "/assets/qe.jpg",
    description: "Heroku hosted app that utilizes a MySql database, Node Express routes, and MVC framework.",
    repository:"http://asdf.com"
  },
  
];



  function Portfolio() {
    console.log(Project);

    return ( <Project project={collection} />);
 



  }


export default Portfolio;
