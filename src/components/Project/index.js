import React from "react";

function Project(props) {
  let projects = props.project.map((site) =>
  // Ran out of time to implement ROW functionality using bootstrap react
     <div className="col-md-6">
      <div className="card">
        <a href={site.url}>
          <img className="card-img-top" src={site.thumbnail} alt={site.name} />
        </a>
        <div className="card-body">
          <h5 className="card-title"> {site.name}</h5>
          <p className="card-text">{site.description}</p>
          <p className="visit">
            {site.url !== "" ? <a href={site.url} className="btn btn-dark">Website</a> : ""}
          &nbsp;
          <a href={site.repository} className="btn btn-dark">Code Repository</a>
          </p>
        </div>
      </div>
    </div>
    
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
