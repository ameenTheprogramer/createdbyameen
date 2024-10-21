import React, { useContext , useEffect } from 'react'
import './App.css';
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import { LoadingContext } from './contexts/LoadingContext';
import Signup from './pages/sign up/Signup';
import Login from './pages/sign up/Login';


function App() {
  const {load, setload} = useContext(LoadingContext)

  
  
   useEffect(() => {
    // Check if the document has fully loaded
    if (document.readyState === 'complete') {
      setload(true); // Everything is loaded
    } else {
      // Add an event listener for when the load event fires
      window.addEventListener('load', () => {
        setload(false); // Loading is done
      });

      // Clean up event listener when component unmounts
      return () => window.removeEventListener('load', () => setload(false));
    }
  }, [setload]);
  

  
  // window.addEventListener('loadeddata', ()=>{
  //     setload(true)
  //   console.log('load');
  // })
  
  
//  document.addEventListener('DOMContentLoaded', ()=>{
//     setload(true)
//     console.log("loaded")
//   })
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

          <Route exact path='/login' element={<Login/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
