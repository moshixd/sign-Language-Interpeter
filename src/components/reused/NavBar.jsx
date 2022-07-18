import { storageDelete } from "../../utils/storage";
import "../css/NavBar.css";
import { STORAGE_KEY_USER } from "../const/storageKeys"
import logo from "./Logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const NavBar = ({ nav, icon, loading }) => {


  const navigate = useNavigate();


  const onSubmit = async (e) => {
    console.log(loading);
    if (e === "log out") {
      await storageDelete(STORAGE_KEY_USER);
      //navigate("/translation")
      
    }
  };

  return (
    <>
      <div className="container">
        {/* Icon */}
        <div className="picture">
          <img id="logo-picture" src={logo} alt="logo" />
        </div>
        <div className="icon">{icon ? <button> Home</button> : ""}</div>
        {/* Title */}
        <h3 className="title">Lost In Translation</h3>
        {/* Profile Button */}
        <div className="nav">
          {nav ? (
           <Link to={"/translation"}>

              <button
                onClick={async () => onSubmit(nav)}
                className="button button1"
                >{nav}</button>
                </Link>
        
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
