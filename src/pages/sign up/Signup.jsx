import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  const signupfunction=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='signupcontainer'>
       

        <form className="signupforum" onSubmit={signupfunction}>
            <h2>Sign up</h2>
            <p className='usernamep fst'>full name</p>
            <input type="text" name="" id="usernameinput" className='input'/>

            <p className='usernamep'>email</p>
            <input type="text" name="" id="emailinput" className='input'/>

            <p className='usernamep'>username</p>
            <input type="text" name="" id="emailinput" className='input'/>

            <p className='usernamep'>password</p>
            <input type="text" name="" id="emailinput" className='input'/>

            <input type="submit" value="sign up" className='submitbtn'/>
            
            <p className='loginlink'>Already have a account, <a  href="" onClick={()=>{
              navigate('/login')
            }}>login ?</a></p>
        </form>
      
    </div>
  )
}

export default Signup
