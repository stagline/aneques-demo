import React from "react";
import useStore from "../store";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function UserDetails() {
    const { usersData } = useStore()

    return (
        <div>
            {
                usersData?.map((user, index) => (
                    <div key={index} className="card py-2 my-4 mx-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Name : {user.firstName}</h5>
                            <h5 className="card-title">Email : {user.email}</h5>
                            <h5 className="card-title">Country : {user.country}</h5>
                        </div>
                    </div>
                ))
            }
                <Link to="/">UserForm</Link>

        </div>
    );
}

export default UserDetails;