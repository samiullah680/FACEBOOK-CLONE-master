import { Button } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { usercontext } from "../CONTEXT/Context";
import "../CSS/Navbar.css";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
  const [flag, setFlag] = useState(true);
  const context3 = useContext(usercontext);
  const [theme, setTheme] = useState(true);

  const themeChange = () => {
    let r = document.querySelector(":root");
    let btn = document.querySelector("#theme");
    if (flag) {
      r.style.setProperty("--text-color", "white");
      r.style.setProperty("--bg-color", "black");
      setTheme(!theme);
      setFlag(!flag);
    } else {
      r.style.setProperty("--text-color", "black");
      r.style.setProperty("--bg-color", "white");
      setTheme(!theme);
      setFlag(!flag);
    }
  };

  return (
    <>
      <div className="nav">
        <div>
          <Link to="/Home" id="facebook-logo">
            <h1>facebook</h1>
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/Home" id="link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/Friends" id="link">
                FRIENDS
              </Link>
            </li>
            <li>
              <Link to="/CreatePost" id="link">
                CREATE POST
              </Link>
            </li>
            <li>
              <Link to="/MyProfile" id="link">
                <Button variant="outlined" sx={{color:"rgb(222, 49, 99 )",fontSize:"22px",fontWeight:"bold"}} endIcon={<LoginIcon />}>
                  {context3.current_user}
                </Button>
              </Link>
            </li>
            <li>
              <button onClick={themeChange} id="theme">
                {theme ? <DarkModeIcon /> : <LightModeIcon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
