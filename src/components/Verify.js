<<<<<<< HEAD
=======
// import React from 'react'
// import {useState } from 'react'
// import BasicNav from './BasicNav';
// import Footer from './Footer';
// import { useNavigate } from 'react-router-dom';  

// const Verify = () => {

//     const [selectedImage, setSelectedImage] = useState(null);
//   const navigate = useNavigate();

//   // Function to handle image selection
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Function to handle form submission (simulated upload to database)
//   const handleSubmit = () => {
//     if (selectedImage) {
//       console.log('Uploading image to database:', selectedImage);
//       // You can perform actual upload logic here, such as using Axios to send the image data to a server
//       // After successful upload, navigate to the next page
//       navigate('/voting')
//     } else {
//       console.log('No image selected.');
//     }
//   };
//   return (
//     <>
//         <BasicNav />
//         <div className="container py-5">
//       <div className="row align-items-center">
//         {/* Left Part: Image */}
//         <div className="col-md-6">
//           <img
//             src={selectedImage ? selectedImage : 'https://paytmblogcdn.paytm.com/wp-content/uploads/2022/12/paytm_aadhar-card-valid-documents-required.jpg'}
//             alt="Hero"
//             className="img-fluid"
//           />
//         </div>
//         {/* Right Part: Select Photo */}
//         <div className="col-md-6">
//           <div className="mb-3 ">
//             <label htmlFor="fileInput" className="form-label"><h3>Select Photo</h3></label>
//             <input
//               type="file"
//               className="form-control bg-primary-subtle "
//               id="fileInput"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//           </div>
//           <button className="btn btn-primary" onClick={handleSubmit}>Upload</button>
//           <p className="lead mt-3">
//            Upload your identity proof.
//           </p>
//         </div>
//       </div>
//     </div>

//     <Footer />
//     </>
//   )
// }

// //<h3>Upload any Identity Proof</h3>
// //Your document will be used to verify your identity.

// export default Verify


>>>>>>> 64d8dfbe2641d0bda1de248d64b0e9c16c8bbff1
import React, { useState } from 'react';
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
      setSelectedImage(file); // Set selectedImage to the file object itself
    }
  };

  // Function to handle form submission (simulated upload to database)
  const handleSubmit = () => {
    if (selectedImage) {
      console.log('Selected image:', selectedImage);
      const fileName = selectedImage.name; // Extracting the file name from the image object
      console.log('File name:', fileName);

      // Checking if the file name contains 'kolkata' or 'mumbai'
      if (fileName.includes('kolkata')) {
        navigate('/kolkata');
      } else if (fileName.includes('mumbai')) {
        navigate('/mumbai');
      } else {
        // If neither 'kolkata' nor 'mumbai' is present in the file name, navigate to a default page
        navigate('/defaultPage');
      }
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
              src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://paytmblogcdn.paytm.com/wp-content/uploads/2022/12/paytm_aadhar-card-valid-documents-required.jpg'}
              alt="Hero"
              className="img-fluid"
            />
          </div>
          {/* Right Part: Select Photo */}
          <div className="col-md-6">
            <div className="mb-3 ">
              <label htmlFor="fileInput" className="form-label"><h3>Select Photo</h3></label>
              <input
                type="file"
                className="form-control bg-primary-subtle "
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Upload</button>
            <p className="lead mt-3">
              Upload your identity proof.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default Verify;
=======
export default Verify;
>>>>>>> 64d8dfbe2641d0bda1de248d64b0e9c16c8bbff1
