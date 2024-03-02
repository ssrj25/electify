import React from 'react'
import {Link} from 'react-router-dom'

const AddingAddress = () => {
  return (
    <>
         <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      {/* <img
        src="https://expowisconsin.org/wp-content/uploads/2022/10/Voting-scaled.jpg"
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      /> */}
      <form>
  <div className="mb-3">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">
      Enter Your Address
    </label> */}
    <input
    placeholder='Example : njbfsdkfudfhbxjbzxvsdjfhsdilhcbzxmvjh'
      type="text-area"
      className="form-control form-control-lg border shadow-lg bg-info-subtle"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your address with anyone else.
    </div>
  </div>
  <div className="mb-3">
   
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      I agree with the terms and conditions
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        Enter Your Address
      </h1>
      <p className="lead">
        The Voting System designed to cast vote with the maximum security to avoid the cheating in the election. The system is based on the Latest Blockchain technology.It will make sure that each person is allowed to vote only once.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
     
      </div>
    </div>
  </div>
</div>  
    </>
  )
}

export default AddingAddress