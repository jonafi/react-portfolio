import React from "react";


function Contact() {
  return (
    <main class="container">
      <article>

        <h1>Contact</h1>
        <hr />
        <section class="row">
          <div class="col-md-6">
            <p>
              <a href="mailto:jonafi@gmail.com">
                <svg class="bi bi-envelope-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.05 3.555L8 8.414l7.95-4.859A2 2 0 0014 2H2A2 2 0 00.05 3.555zM16 4.697l-5.875 3.59L16 11.743V4.697zm-.168 8.108L9.157 8.879 8 9.586l-1.157-.707-6.675 3.926A2 2 0 002 14h12a2 2 0 001.832-1.195zM0 11.743l5.875-3.456L0 4.697v7.046z" />
                </svg>
                  &nbsp;jonafi@gmail.com</a></p>
            <hr />
            <p>
              <a href="tel:+1-516-965-2434">
                <svg class="bi bi-phone" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              +1 (516) 965-2434</a></p>
            <hr />
          </div>
          <div class="col-md-6">
            <p><a href="https://www.linkedin.com/in/johnferro/"><img src="assets/linkedin.svg" class="logo"/> LinkedIn</a></p>
              <hr />
              <p><a href="https://www.github.com/jonafi/"><img src="assets/github.png" class="logo"/> GitHub</a></p>
                <hr />
            </div>
        </section>
      </article>
    </main>



    );
  }


export default Contact;
