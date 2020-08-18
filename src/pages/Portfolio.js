import React from "react";

  function Portfolio() {
    return (

<main class="container">
    <article>
        <h1>Portfolio</h1>
        <section class="row">
          <div class="col-md-6">
             <div class="card">
               <a href="http://john-ferro-burger.herokuapp.com">
                   <img class="card-img-top" src="assets/burger.jpg" alt="Eat-da-Burger!"/>
               </a>
               <div class="card-body">
                 <h5 class="card-title">Eat-Da-Burger</h5>
                 <p class="card-text">Heroku hosted app that utilizes a MySql database, Node Express routes, and MVC framework.</p>
                 <p class="visit">
                   <a href="http://john-ferro-burger.herokuapp.com" class="btn btn-dark">Website</a>
                   <a href="https://github.com/jonafi/burger" class="btn btn-dark">Code Repository</a>
                 </p>
               </div>
             </div>
         </div>
         <div class="col-md-6">
          <div class="card">
            <a href="https://team-caribou.herokuapp.com/">
                <img class="card-img-top" src="assets/spt.jpg" alt="Stock Portfolio Tracker"/>
            </a>
            <div class="card-body">
              <h5 class="card-title">Stock Portfolio Tracker</h5>
              <p class="card-text">Group project built with Sequelize, Handlebars, Passport.js on a MVC framework.</p>
              <p class="visit">
                <a href="https://team-caribou.herokuapp.com/" class="btn btn-dark">Website</a>
                <a href="https://github.com/jonafi/stock-portfolio-tracker" class="btn btn-dark">Code Repository</a>
              </p>
            </div>
          </div>
      </div>
     </section>
        <section class="row">
          <div class="col-md-6">
            <div class="card">
              <a href="/quarantine-eats">
                <img class="card-img-top" src="assets/qe.jpg" alt="Project 1 - Quarantine Eats"/>
              </a>
              <div class="card-body">
                <h5 class="card-title">Quarantine Eats</h5>
                <p class="card-text">Group project that implemented 2 different APIs, Materialize CSS, and advanced Git collaboration tools.</p>
                <p class="visit">
                  <a href="/quarantine-eats" class="btn btn-dark">Website</a>
                  <a href="https://github.com/jonafi/quarantine-eats" class="btn btn-dark">Code Repository</a>
                </p>
              </div>
          </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <a href="/weather-dashboard">
                <img class="card-img-top" src="assets/wd.jpg" alt="Weather Dashboard"/>
              </a>
              <div class="card-body">
                <h5 class="card-title">Weather Dashboard</h5>
                <p class="card-text">Unit 6 - Multiple API calls, utilizes localStorage, Bootstrap mobile-first design.</p>
                <p class="visit">
                  <a href="/weather-dashboard" class="btn btn-dark">Website</a>
                  <a href="https://github.com/jonafi/weather-dashboard" class="btn btn-dark">Code Repository</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="row">
         <div class="col-md-6">
            <div class="card">
              <a href="/code-quiz">
                  <img class="card-img-top" src="assets/cq.jpg" alt="Code Quiz"/>
              </a>
              <div class="card-body">
                <h5 class="card-title">Code Quiz</h5>
                <p class="card-text">Unit 4 - Vanilla javaScript DOM manipulation and event listeners.</p>
                <p class="visit">
                  <a href="/code-quiz" class="btn btn-dark">Website</a>
                  <a href="https://github.com/jonafi/code-quiz" class="btn btn-dark">Code Repository</a>
                </p>
              </div>
            </div>
        </div>
        <div class="col-md-6">
          <div class="card" >
            <a href="https://github.com/jonafi/employee-cms">
              <img class="card-img-top" src="assets/ecms.jpg" alt="Employee CMS"/>
            </a>
            <div class="card-body">
              <h5 class="card-title">Employee CMS</h5>
              <p class="card-text">Command line interface, uses MySQL and Inquirer</p>
              <p class="visit"><a href="https://github.com/jonafi/employee-cms" class="btn btn-dark">Code Repository</a></p>
            </div>
        </div>
      </div>
    </section>
    <section class="row">
     <div class="col-md-6">
       <div class="card" >
         <a href="https://github.com/jonafi">
           <img class="card-img-top" src="assets/github.jpg" alt="Github"/>
         </a>
         <div class="card-body">
           <h5 class="card-title">GitHub</h5>
           <p class="card-text">See all of my works-in-progress.</p>
           <p class="visit"><a href="https://github.com/jonafi?tab=repositories" class="btn btn-dark">See All Repositories</a></p>
         </div>
     </div>
   </div>
 </section>
   </article>
  </main>

    );
  }


export default Portfolio;
