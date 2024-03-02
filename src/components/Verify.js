import React from 'react'
import {useState } from 'react'
import BasicNav from './BasicNav';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';  

const Verify = () => {

    const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle form submission (simulated upload to database)
  const handleSubmit = () => {
    if (selectedImage) {
      console.log('Uploading image to database:', selectedImage);
      // You can perform actual upload logic here, such as using Axios to send the image data to a server
      // After successful upload, navigate to the next page
      navigate('/thanks')
    } else {
      console.log('No image selected.');
    }
  };
  return (
    <>
        <BasicNav />
        <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Part: Image */}
        <div className="col-md-6">
          <img
            src={selectedImage ? selectedImage : 'https://paytmblogcdn.paytm.com/wp-content/uploads/2022/12/paytm_aadhar-card-valid-documents-required.jpg'}
            alt="Hero"
            className="img-fluid"
          />
        </div>
        {/* Right Part: Select Photo */}
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="fileInput" className="form-label">Select Photo</label>
            <input
              type="file"
              className="form-control"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>Upload</button>
          <p className="lead mt-3">
            Some text describing the hero section. You can add more content here as needed.
          </p>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}

//<h3>Upload any Identity Proof</h3>
//Your document will be used to verify your identity.

export default Verify