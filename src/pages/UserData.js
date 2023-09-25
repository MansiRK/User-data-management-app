import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import database from "../firebase-config";
import { ref, get } from "firebase/database";
import { useParams, Link } from "react-router-dom";

const UserData = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const userRef = ref(database, `users/${id}`);

    try {
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUser(userData);
        } else {
          setUser({});
        }
      });
    } catch (error) {
      console.error(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <NavBar />
      <div className="container-fluid user-data">
        <h4>User Details</h4>
        <div className="card">
          <div className="card-header">
            <h5>Data of User: {user.name}</h5>
          </div>
          <div className="card-body">
            <h6>
              Name: <span>{user.name}</span>
            </h6>
            <hr />
            <h6>
              Email Address: <span>{user.email}</span>
            </h6>
            <hr />

            <h6>
              Phone No.: <span>{user.phone}</span>
            </h6>
            <hr />

            <h6>
              Age: <span>{user.age}</span>
            </h6>
            <hr />

            <h6>
              Gender: <span>{user.gender}</span>
            </h6>
            <hr />

            <h6>
              City: <span>{user.city}</span>
            </h6>
            <hr />

            <h6>
              Country: <span>{user.country}</span>
            </h6>

            <div className="btn-contain">
              <Link to={`/`} className="btn btn-back">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
