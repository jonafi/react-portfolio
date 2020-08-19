import React from "react";

function Project(props) {
  let projects = props.project.map((site) =>
    // <section className={site.id===1 ? "row" : ""}>
    <div className="col-md-6">
      <div className="card">
        {/* {site.id}<br /> */}
        <h5 className="card-title"> {site.name}</h5>
        <a href={site.url}>
          <img className="card-img-top" src={site.thumbnail} alt={site.name} />
        </a>
        <p className="card-text">{site.description}</p>
        <p className="visit">
          <a href={site.url} className="btn btn-dark">Website</a>
          <a href={site.repository} className="btn btn-dark">Code Repository</a>
        </p>
      </div>
    </div>
    //  </section>
  );

  return (
    <main className="container">
      <article>
        <h1>Portfolio</h1>
        {projects}
      </article>
    </main>
   
  );
}

export default Project;
