import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import database from "../firebase-config";
import { ref, remove, get } from "firebase/database";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Home = () => {
  // Initialize state to store user data
  const [data, setData] = useState({});

  // Fetch user data from Firebase database on component mount
  useEffect(() => {
    const userRef = ref(database, "users");

    try {
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          setData({ ...snapshot.val() });
        } else {
          setData({});
        }
      });
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }

    return () => {
      setData({});
    };
  }, []);

  // Function to handle user data deletion
  const handleDelete = (id) => {
    if (window.confirm("Delete this user data?")) {
      const userRef = ref(database, `users/${id}`);

      try {
        remove(userRef).then(() => {
          // Data successfully deleted, update the state to reflect the change
          const updatedData = { ...data };
          delete updatedData[id];
          setData(updatedData);

          toast.success("User deleted successfully");
        });
      } catch (error) {
        toast.error("Something went wrong");
        console.error(error);
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="container-fluid home">
        <h4>
          {Object.keys(data).length === 0
            ? "No User Added"
            : Object.keys(data).length === 1
            ? "Added User Data"
            : "Added Users Data"}
        </h4>
        <div className="table-container">
          <table className="table user-table border">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Age</th>
                <th>Gender</th>
                <th>City</th>
                <th>Country</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id, index) => {
                return (
                  <tr key={id}>
                    <th scope="col">{index + 1}</th>
                    <td>{data[id].name}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].phone}</td>
                    <td>{data[id].age}</td>
                    <td>{data[id].gender}</td>
                    <td>{data[id].city}</td>
                    <td>{data[id].country}</td>
                    <td>
                      <div className="btn-contain">
                        {/* Link to view user data */}
                        <Link to={`/user/data/${id}`} className="btn btn-view">
                          View
                        </Link>
                        {/* Link to edit user data */}
                        <Link to={`/user/edit/${id}`} className="btn btn-edit">
                          Edit
                        </Link>
                        {/* Button to delete user data */}
                        <Link
                          className="btn btn-delete"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </Link>
                        <Toaster />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
