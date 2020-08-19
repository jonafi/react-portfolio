import React from "react";
import Project from "../components/Project"


const collection = [
  {
    id: 1,
    name: "Website 1",
    url: "http://asdg.com",
    thumbnail: "/assets/asdf.jpg"
  },
  {
    id: 2,
    name: "Webstie 2",
    url: "https://zxcv.com",
    thumbnail: "/assets/asdf.jpg"
  },
  
];



  function Portfolio() {
    console.log(Project);

    return ( <Project project={collection} />);
 



  }


export default Portfolio;
