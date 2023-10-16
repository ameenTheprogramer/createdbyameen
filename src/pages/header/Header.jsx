import React from 'react'
import './Header.css'

function Header() {
    const glower=()=>{
        let glower = document.getElementById('glower')
        let num = Math.floor(Math.random()*51)
        if(glower){


            if(num === 1 || num === 3 || num === 5 || num === 7 || num === 9 ){
                glower.style.animation = 'glowing 2s linear 1'
        }else{
            glower.style.animation = ''
        }
    }
    }
    setInterval(glower, 1000)
  return (
    <div className='header'>
        <div className="logo">

        <p className='glowing' id='glower'>CAR GUYS</p>
        </div>
      
    </div>
  )
}

export default Header
