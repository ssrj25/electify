import React from 'react'
import BasicNav from './BasicNav'
import Footer from './Footer'


const Kolkata = () => {
  return (
    <>
        
        <BasicNav />
            <div className='text-center mt-3'>
            <h1>Kolkata Candidates</h1>      
            </div>
            <div className="container container-voting">
                <div className="card-deck card-deck-voting">
                    <div className="card card-voting">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate A</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <button type="button" className="btn btn-voting btn-success">
                                Give Vote
                            </button>
                        </div>
                    </div>
                    <div className="card card-voting">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate B</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <button type="button" className="btn btn-voting btn-success" >
                                Give Vote
                            </button>
                        </div>
                    </div>
                    <div className="card card-voting">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="card-img-top" alt="..." width="30%" />
                        <div className="card-body">
                            <h5 className="card-title">Candidate C</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                            <button type="button" className="btn btn-voting btn-success" >
                                Give Vote
                            </button>
                           
                        </div>
                         
                    </div>
                </div>
            </div>
            
            <Footer />
    </>
  )
}

export default Kolkata