import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usercontext } from '../CONTEXT/Context'
import '../CSS/Signup.css'

const Signup = () => {
  let context1 = useContext(usercontext);
  let navigate = useNavigate();
  const signupForm = () =>{
    let name = document.querySelector("#name-s").value;
    let email = document.querySelector("#email-s").value;
    let password = document.querySelector("#pass-s").value;
    let obj = {name:name,login_id:email,password:password}
    context1.setSignup_data([...context1.signup_data,obj]);
  
    navigate('/')

}

return (
  <>
    <main>
      <h1 style={{textAlign:"center"}}>WELCOME TO <span style={{color:" rgb(0, 159, 203)"}}>FACEBOOK</span></h1>
   <div className='form1-div'>
        <div className='left-l'>
          <img src='https://i.pcmag.com/imagery/articles/04HUXgEu0I3mdCOejOjQpNE-5..v1620748900.jpg' alt='asdfja' id='login-img'/>
        </div>

        <div className='right-l'>
          <h1 style={{textAlign:"center"}}>Create an Account</h1>
             
          <span >name:</span> <input type='text' id='name-s'/><br></br>
          <span >email:</span> <input type='text' id='email-s'/><br></br>
        
          <span>new password:</span> <input type='text' id='pass-s'/><br></br>
          <div style={{textAlign:"center" }}>
             <button onClick={signupForm}>SIGNUP</button><br></br>
             <span>Already have an account? <Link to='/'>Login</Link></span>
          </div>
          

        </div>
   </div>
   </main>
  </>
)
}

export default Signup
