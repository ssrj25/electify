import React from 'react'

const Address = () => {
  return (
    <div className="address-container d-flex justify-content-center align-items-center">
      <form className="address-form bg-light p-4 rounded">
        <div className="mb-3">
          <label htmlFor="addressInput" className="form-label">Enter your address:</label>
          <input type="text" className="form-control" id="addressInput" placeholder="Enter your address" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Address