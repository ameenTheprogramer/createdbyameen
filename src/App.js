import React, { useContext } from 'react'
import './App.css';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import { LoadingContext } from './contexts/LoadingContext';
import Signup from './pages/sign up/Signup';


function App() {
  const {load, setload} = useContext(LoadingContext)



  
  window.addEventListener('load', ()=>{
    

      setload(true)
    console.log('load');
    
  })
  
  
 // document.addEventListener('DOMContentLoaded', ()=>{
  //   setload(true)
  // })
  return (
    <div onLoad={()=>{
      // if(window.innerWidth< 1000){
      //   setload(true)
      //   // alert('0101');
      // }
    }}>
      <Router>
        <Routes>
          <Route exact path='/createdbyameen' element={<Home/>}/>

          <Route exact path='/signup' element={<Signup/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
