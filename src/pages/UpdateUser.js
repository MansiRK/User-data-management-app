// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import database from "../firebase-config";
// import toast, { Toaster } from "react-hot-toast";
// import { ref, push, get } from "firebase/database";
// import { useNavigate, useParams } from "react-router-dom";

// const initalState = {
//   name: "",
//   email: "",
//   phone: "",
//   age: "",
//   gender: "",
//   city: "",
//   country: "",
// };

// const UpdateUser = () => {
//   const [state, setState] = useState(initalState);
//   const [data, setData] = useState();
//   const { name, email, age, phone, gender, city, country } = state;
//   const navigate = useNavigate();

//   const { id } = useParams();

//   useEffect(() => {
//     const userRef = ref(database, "users");

//     try {
//       get(userRef).then((snapshot) => {
//         if (snapshot.exists()) {
//           setData({ ...snapshot.val() });
//         } else {
//           setData({});
//         }
//       });
//     } catch (error) {
//       toast.error("Something went wrong");
//       console.error(error);
//     }

//     return () => {
//       setData({});
//     };
//   }, [id]);

//   useEffect(() => {
//     if (id) {
//       setState(...data[id]);
//     }
//   }, [id, data]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !email || !age || !phone || !gender || !city || !country) {
//       toast.error("Please fill all details");
//     } else {
//       const userRef = ref(database, "users");

//       try {
//         await push(userRef, state);
//         toast.success("User details added successfully");
//         setState(initalState);

//         setTimeout(() => {
//           navigate("/");
//         }, 3000);
//       } catch (error) {
//         toast.error("Something went wrong");
//       }
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className="container-fluid add-user">
//         <h4>Add New User</h4>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             name="name"
//             value={name}
//             placeholder="John Doe"
//             onChange={handleInputChange}
//           />

//           <label htmlFor="email" className="form-label">
//             Email Address
//           </label>
//           <input
//             className="form-control"
//             type="email"
//             name="email"
//             value={email}
//             placeholder="johndoe@example.com"
//             onChange={handleInputChange}
//           />

//           <label htmlFor="phone" className="form-label">
//             Phone Number
//           </label>
//           <input
//             className="form-control"
//             type="number"
//             name="phone"
//             value={phone}
//             placeholder="00000-00000"
//             onChange={handleInputChange}
//           />

//           <label htmlFor="age" className="form-label">
//             Age
//           </label>
//           <input
//             className="form-control"
//             type="number"
//             name="age"
//             value={age}
//             placeholder="31"
//             onChange={handleInputChange}
//           />

//           <label htmlFor="gender" className="form-label">
//             Gender
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             name="gender"
//             value={gender}
//             placeholder="Male"
//             onChange={handleInputChange}
//           />

//           <label htmlFor="city" className="form-label">
//             City
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             name="city"
//             value={city}
//             placeholder="Mumbai"
//             onChange={handleInputChange}
//           />

//           <label htmlFor="country" className="form-label">
//             Country
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             name="country"
//             value={country}
//             placeholder="India"
//             onChange={handleInputChange}
//           />
//           <div className="btn-contain">
//             <button className="btn btn-add">Add User</button>
//             <Toaster />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateUser;
