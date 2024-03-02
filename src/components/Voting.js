import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicNav from './BasicNav';
import Footer from './Footer';

const Voting = () => {

    const [votingCount, setVotingCount] = useState(0);
    const navigate = useNavigate();
  
    // Function to handle voting
    const handleVote = () => {
      // Increment voting count
      setVotingCount(prevCount => prevCount + 1);
      // Redirect to the "/thanks" route
      navigate('/thanks');
    };
    


  return (
    <>
    <BasicNav />

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
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        <button type="button" className="btn btn-voting btn-success" onClick={handleVote}>
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
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        <button type="button" className="btn btn-voting btn-success" onClick={handleVote}>
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
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        <button type="button" className="btn btn-voting btn-success" onClick={handleVote}>
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

export default Voting