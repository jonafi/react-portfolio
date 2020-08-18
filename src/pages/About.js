import React from "react";


function About() {
  return (
<main class="container">
    <h2>About Me</h2>
    <section class="row">
      <div class="col-md-4">
        <img src="assets/about-me.jpg" class="img-fluid profile-pic" alt="Profile picture - Lemur"/>
      </div>
      <div class="col-md-8">
        <h4>My Bio</h4>
        <p>I was born and raised in New York. After working in technology and marketing related jobs for 15 years, I took the next logicial step and became a stay-at-home father in Germany for four years.
          I'm back in the U.S. now, and I've survived my first Minnesota winter. I'm currently enrolled in the University of Minnesota coding bootcamp to bring my skills up-to-date.

        </p>
   <a href="assets/John-Ferro_Resume.pdf" class="btn btn-outline-secondary">Resume</a>
   <a href="assets/Brand-Statement.pdf" class="btn btn-outline-secondary">Brand Statement</a>
   <a href="portfolio.html" class="btn btn-outline-secondary">Portfolio</a>
   <a href="contact.html" class="btn btn-outline-secondary">Contact</a>

      </div>
    </section>
  </main>
  );
}

export default About;
