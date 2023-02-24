import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usercontext } from "../CONTEXT/Context";
// import data from "../DATA/FriendsData";
import "../CSS/Login.css";

const Login = () => {
  let context2 = useContext(usercontext);
  let navigate = useNavigate();

  const loginForm = () => {
    let email = document.querySelector("#email-l").value;
    let password = document.querySelector("#pass-l").value;
    // console.log(context2.signup_data);

    let flag = true;
    for(let i = 0; i<context2.signup_data.length ; i++){
       
         if((context2.signup_data[i].login_id === email) && (context2.signup_data[i].password === password)){
          context2.setCurrent_user(context2.signup_data[i].name);
       
          flag = false;
          alert('registered successfully....');
          navigate('/Home')
          break;
         }
    }
    if(flag === true){
       alert("password not matched..please try again or create an account ..")
    }


  };

  return (
    <>
      <main>
        <h1 style={{ textAlign: "center" }}>
          WELCOME TO <span style={{ color: "rgb(0, 159, 203)" }}>Facebook</span>
        </h1>
        <div className="form1-div">
          <div className="left-l">
            <img
              src="https://i.pcmag.com/imagery/articles/04HUXgEu0I3mdCOejOjQpNE-5..v1620748900.jpg"
              alt="asdfja"
              id="login-img"
            />
          </div>

          <div className="right-l">
            <h1 style={{ textAlign: "center" }}>
              Login to{" "}
              <span style={{ color: "rgb(0, 159, 203)" }}>Facebook</span>
            </h1>
            <span>email:</span> <input type="text" id="email-l" />
            <br></br>
            <span>password:</span> <input type="text" id="pass-l" />
            <br></br>
            <div style={{ textAlign: "center" }}>
              <button onClick={loginForm}>LOGIN</button>
              <br></br>
              <span>
                Dont have an account? <Link to="/Signup">Signup</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
