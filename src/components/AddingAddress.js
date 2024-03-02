import React from 'react';
import { Link }from 'react-router-dom';

const AddingAddress = () => {
  // Retrieve all_address from localStorage or use default value

  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <form>
              <div className="mb-3">
                <input
                  placeholder='Example: njbfsdkfudfhbxjbzxvsdjfhsdilhcbzxmvjh'
                  type="text"
                  className="form-control form-control-lg border shadow-lg bg-info-subtle"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your address with anyone else.
                </div>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree with the terms and conditions
                </label>
              </div>
              <Link type="submit "  to ="/verify" className="btn btn-primary">
                Submit
              </Link>
            </form>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Enter Your Address
            </h1>
            <p className="lead">
              The Voting System is designed to cast votes with maximum security to avoid cheating in elections. The system is based on the latest Blockchain technology. It ensures that each person is allowed to vote only once.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AddingAddress;
