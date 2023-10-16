import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <div className='footerdiv'>
      <button className='signupbtn' onClick={()=>{navigate('/signup')}}>Sign Up</button>
      <p id='copy' className='setp copy'>&#169; by ameen 2023</p>
    </div>
  )
}

export default Footer
