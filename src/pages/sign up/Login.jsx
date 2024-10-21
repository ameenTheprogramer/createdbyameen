import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const loginfunction=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='signupcontainer'>
       

        <form className="signupforum" onSubmit={loginfunction}>
            <h2>Login</h2>
            <p className='usernamep'>username</p>
            <input type="text" name="" id="emailinput" className='input'/>

            <p className='usernamep'>password</p>
            <input type="text" name="" id="emailinput" className='input'/>

            <input type="submit" value="sign up" className='submitbtn'/>
            
            <p className='loginlink'>Doesn't own a account, <a onClick={()=>{
                navigate('/signup')
            }} href="">Sign up ?</a></p>
        </form>
      
    </div>
  )
}

export default Login
