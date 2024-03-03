// import React,{useState} from "react";
// import orkesConductorClient from '@io-orkes/conductor-javascript';

// //Initialize Orkes Conductor client outside the component
// const config= {
//     serverUrl: 'https://play.orkes.io/api',
// }

// (async () => {
//     const clientPromise = orkesConductorClient(config);
//     const client = await clientPromise;
// })()    

// const Register=()=>{
//     const [formData, setFormData]=useState({
//         email:'',   
//         password:'',
//         });

//         const handleChange=(event)=>{
//             setFormData({
//                 ...formData,
//                 [event.target.name]:event.target.value,
//                 })
//             };

//             const handleSubmit=async(event)=>{
//                 event.preventDefault();

//                 try{
//                     const workflowExecution = await client.starWorkflow({
//                         workflowId: '9ba13a3d-d8fe-11ee-b9db-aeed9c586a56',
//                         inputs: formData,

//                     })

//                     const result = await workflowExecution.waitForFinished();

//                     if(result.status ==='COMPLETED'){
//                         console.log('Registration successful!');
// }else{
//     console.error('Registration failed:', result.error);
// }
//                 }catch(error){
//                     console.error('Error:', error);

//                 }
//             }
                
//             return(
//                 <div>
//                     <h1>Register</h1>
//                 <form onSubmit={handleSubmit}>
//                 <button type="submit">Register</button>
//                 </form>
//                 </div>
//             )
// }

// export default Register;