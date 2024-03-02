import React from "react";

function BasicNav() {
  return (
   <>
    <nav id="myheader" className="navbar bg-info-subtle py-5 navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a style={{
      fontSize:'40px',
    }} className="mx-5 navbar-brand" href="/">
      Electify
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      </ul>
    <div>
    <button type="button" class=" mx-0 py-2 px-4  btn btn-lg btn-primary">Show result</button>
    </div>
    </div>
  </div>
</nav>

   </>
  );
}

export default BasicNav;