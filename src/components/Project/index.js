import React from "react";

function Project(props) {

  let projects = props.project.map((site) => <div>{site.url}</div>);



  return (

    <main className="container">
      <article>
        <h1>Portfolio</h1>
      </article>
      {projects}
    </main>
    // {projects}

    // <main className="container">
    //     <article>
    //         <h1>Portfolio</h1>
    //         <section className="row">
    //           <div className="col-md-6">
    //              <div className="card">
    //                <a href="http://john-ferro-burger.herokuapp.com">
    //                    <img className="card-img-top" src="assets/burger.jpg" alt="Eat-da-Burger!"/>
    //                </a>
    //                <div className="card-body">
    //                  <h5 className="card-title">Eat-Da-Burger</h5>
    //                  <p className="card-text">Heroku hosted app that utilizes a MySql database, Node Express routes, and MVC framework.</p>
    //                  <p className="visit">
    //                    <a href="http://john-ferro-burger.herokuapp.com" className="btn btn-dark">Website</a>
    //                    <a href="https://github.com/jonafi/burger" className="btn btn-dark">Code Repository</a>
    //                  </p>
    //                </div>
    //              </div>
    //          </div>
    //          <div className="col-md-6">
    //           <div className="card">
    //             <a href="https://team-caribou.herokuapp.com/">
    //                 <img className="card-img-top" src="assets/spt.jpg" alt="Stock Portfolio Tracker"/>
    //             </a>
    //             <div className="card-body">
    //               <h5 className="card-title">Stock Portfolio Tracker</h5>
    //               <p className="card-text">Group project built with Sequelize, Handlebars, Passport.js on a MVC framework.</p>
    //               <p className="visit">
    //                 <a href="https://team-caribou.herokuapp.com/" className="btn btn-dark">Website</a>
    //                 <a href="https://github.com/jonafi/stock-portfolio-tracker" className="btn btn-dark">Code Repository</a>
    //               </p>
    //             </div>
    //           </div>
    //       </div>
    //      </section>
    //         <section className="row">
    //           <div className="col-md-6">
    //             <div className="card">
    //               <a href="/quarantine-eats">
    //                 <img className="card-img-top" src="assets/qe.jpg" alt="Project 1 - Quarantine Eats"/>
    //               </a>
    //               <div className="card-body">
    //                 <h5 className="card-title">Quarantine Eats</h5>
    //                 <p className="card-text">Group project that implemented 2 different APIs, Materialize CSS, and advanced Git collaboration tools.</p>
    //                 <p className="visit">
    //                   <a href="/quarantine-eats" className="btn btn-dark">Website</a>
    //                   <a href="https://github.com/jonafi/quarantine-eats" className="btn btn-dark">Code Repository</a>
    //                 </p>
    //               </div>
    //           </div>
    //           </div>
    //           <div className="col-md-6">
    //             <div className="card">
    //               <a href="/weather-dashboard">
    //                 <img className="card-img-top" src="assets/wd.jpg" alt="Weather Dashboard"/>
    //               </a>
    //               <div className="card-body">
    //                 <h5 className="card-title">Weather Dashboard</h5>
    //                 <p className="card-text">Unit 6 - Multiple API calls, utilizes localStorage, Bootstrap mobile-first design.</p>
    //                 <p className="visit">
    //                   <a href="/weather-dashboard" className="btn btn-dark">Website</a>
    //                   <a href="https://github.com/jonafi/weather-dashboard" className="btn btn-dark">Code Repository</a>
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </section>
    //         <section className="row">
    //          <div className="col-md-6">
    //             <div className="card">
    //               <a href="/code-quiz">
    //                   <img className="card-img-top" src="assets/cq.jpg" alt="Code Quiz"/>
    //               </a>
    //               <div className="card-body">
    //                 <h5 className="card-title">Code Quiz</h5>
    //                 <p className="card-text">Unit 4 - Vanilla javaScript DOM manipulation and event listeners.</p>
    //                 <p className="visit">
    //                   <a href="/code-quiz" className="btn btn-dark">Website</a>
    //                   <a href="https://github.com/jonafi/code-quiz" className="btn btn-dark">Code Repository</a>
    //                 </p>
    //               </div>
    //             </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="card" >
    //             <a href="https://github.com/jonafi/employee-cms">
    //               <img className="card-img-top" src="assets/ecms.jpg" alt="Employee CMS"/>
    //             </a>
    //             <div className="card-body">
    //               <h5 className="card-title">Employee CMS</h5>
    //               <p className="card-text">Command line interface, uses MySQL and Inquirer</p>
    //               <p className="visit"><a href="https://github.com/jonafi/employee-cms" className="btn btn-dark">Code Repository</a></p>
    //             </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="row">
    //      <div className="col-md-6">
    //        <div className="card" >
    //          <a href="https://github.com/jonafi">
    //            <img className="card-img-top" src="assets/github.jpg" alt="Github"/>
    //          </a>
    //          <div className="card-body">
    //            <h5 className="card-title">GitHub</h5>
    //            <p className="card-text">See all of my works-in-progress.</p>
    //            <p className="visit"><a href="https://github.com/jonafi?tab=repositories" className="btn btn-dark">See All Repositories</a></p>
    //          </div>
    //      </div>
    //    </div>
    //  </section>
    //    </article>
    //   </main>




  );
}

export default Project;
