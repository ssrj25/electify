import React from 'react'
import {Link} from 'react-router-dom'

const Herosection = () => {
  return (
    <>     
       <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="https://expowisconsin.org/wp-content/uploads/2022/10/Voting-scaled.jpg"
        className="d-block mx-lg-auto img-fluid rounded"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        Welcome to the Decentralised Voting System
      </h1>
      <p className="lead">
        The Voting System designed to cast vote with the maximum security and complete anonymity. The system is based on the latest Ethereum-Polygon based Blockchain technology. It will make sure that each person is allowed to vote only once.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link to="/address" className="btn btn-primary btn-lg px-4 me-md-2">
                Cast Your Vote </Link>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
          tutorial
        </button>
      </div>
    </div>
  </div>
</div>  

    </>
  )
}

export default Herosection