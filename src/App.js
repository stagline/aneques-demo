import React from "react";
import "./App.css";
import UserForm from "./Components/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetails from "./Components/UserDetails";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<UserForm />} />
          <Route exact path="/users" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
