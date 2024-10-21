import React from 'react'
import './Container.css'
import img1 from '../../imgs/img1.jpg'
import img2 from '../../imgs/img2.jpg'
import { Supramk4 } from '../3D car/supra mk4/Supramk4';

function Container() {
  //     let width = window.innerWidth
  //   const imagesort =()=>{
  //     if(width < 425){
  //         return(
  //             img2
  //         )
  //     }else{
  //         return(
  //             img1
  //         )
  //     }
  //   }





  // var i = 0;
  // var txt = 'TO BE A CAR GUY YOU NEED MORE AND BETTER KNOWLEDGE ABOUT CARS';
  // var speed = 80;

  // const typeWriter=()=> {
  //   if (i < txt.length) {
  //     document.getElementById("txt").innerHTML += txt.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, speed);
  //   }
  // }
  // var scroll = document.documentElement.scrollTop || document.body.scrollTop
  // const scrollfunction = ()=>{
  //   console.log('trigererer');
  //   if(document.getElementById("txt") && scroll === 0 && window.innerWidth > 1000){
  //     typeWriter()
  //   }}


  var i = 0;
  var txt = 'TO BE A CAR GUY YOU NEED MORE AND BETTER KNOWLEDGE ABOUT CARS';
  var speed = 80;

  const typeWriter = () => {
    if (i <= txt.length) {
      const cursorVisibility = (i === txt.length) ? 'hidden' : 'visible';
      document.getElementById("txt").innerHTML = txt.substring(0, i) + '<span style={{fontSize:`${window.innerWidth < 425 ? "13px" : "20px"}`}} id="cursor" style="visibility: ' + cursorVisibility + ';"> |</span>';
      i++;
      blinkCursor()
      setTimeout(typeWriter, speed);
    }
  }

  const blinkCursor = () => {
    const cursor = document.getElementById("cursor");
    setInterval(() => {
      cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
    }, 500); // Toggle visibility every 500ms (half a second)
  }


  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollfunction = () => {
    console.log('triggered');
    if (document.getElementById("txt") && scroll === 0 && window.innerWidth > 10) {
      typeWriter();
    }
  }

  // Call scrollfunction to set up the typing and blinking when appropriate

  
  const loadthird = () => {
    let div = document.getElementById('thirddiv')
    var currentHeight = div.offsetHeight;
    
    // const v = () => {
    //   if (window.innerWidth <= 425) {
    //     return (40)
    //   } else if (window.innerWidth > 425) {
    //     return (80)
    //   }
    // }
    
    
    let height = currentHeight + 60
    console.log(currentHeight);
    if (currentHeight) {
      div.style.height = `${height}px`
    }
  }



  return (
    <div className='container' onLoad={scrollfunction} >
      <div className="topimgdiv">
        <img id='topimg' className='topimg' src={window.innerWidth < 425 ? img2 : img1} alt="" />
        <div className="gradient"></div>
        <div className='discribtion'>

          <p id='txt'  ></p>

        </div>
      </div>
      <div className="seconddiv">

        <h2 className='whatcar'>WHAT CARS ?</h2>

        <div className="canvasdiv">
          <Supramk4 />
          <div id='carparaid' className="carpara needscroll">
            <h2 className='seth2'>cars</h2>
            <p className='setp'>13th Generation Intel® Core™ i9 processor Windows 11 Home 43.9 cm (17.3) diagonal QHD display 240 Hz refresh rate, 3 ms response time display NVIDIA® GeForce RTX™ 4080 32 GB RAM DDR5 1 TB PCIe® NVMe™ SSD Hard drive Backlit RGB 4-zone Keyboard/Wide Vision 720p HD camera/B&O Speakers/OMEN Gaming Hub Control Suite 13th Generation Intel® Core™ i9 processor Windows 11 Home 43.9 cm (17.3) diagonal QHD display 240 Hz refresh rate, 3 ms response time display NVIDIA® GeForce RTX™ 4080 32 GB RAM DDR5 1 TB PCIe® NVMe™ SSD Hard drive Backlit RGB 4-zone Keyboard/Wide Vision 720p HD camera/B&O Speakers/OMEN Gaming Hub Control Suite 13th Generation Intel® Core™ i9 processor Windows 11 Home 43.9 cm (17.3) diagonal QHD display 240 Hz refresh rate, 3 ms response time display NVIDIA® GeForce RTX™ 4080 32 GB RAM DDR5 1 TB PCIe® NVMe™ SSD Hard drive Backlit RGB 4-zone Keyboard/Wide Vision 720p HD camera/B&O Speakers/OMEN Gaming Hub Control Suite 13th Generation Intel® Core™ i9 processor Windows 11 Home 43.9 cm (17.3) diagonal QHD display 240 Hz refresh rate, 3 ms response time display NVIDIA® GeForce RTX™ 4080 32 GB RAM DDR5 1 TB PCIe® NVMe™ SSD Hard drive Backlit RGB 4-zone Keyboard/Wide Vision 720p HD camera/B&O Speakers/OMEN Gaming Hub Control Suite</p>

          </div>

        </div>

      </div>
      <div id='thirddiv' className="thirddiv" onLoad={loadthird}>


        <div id='cars' className="cars">
          <div className="carimgdiv">

            <img src={img2} alt="" className='carimg' />
          </div>
          <p id='cartitle' className='setp cartitle'>car</p>
          <div className='angleicon' id='angleicon'>
            <i class="fa-solid fa-angle-down"></i>
            <p id='more' className='more'>more</p>
          </div>
        </div>



        <div id='cars' className="cars">
          <div className="carimgdiv">

            <img src={img2} alt="" id='carimg' className='carimg' />
          </div>
          <p id='cartitle' className='setp cartitle'>car</p>
          <div className='angleicon' id='angleicon'>
            <i class="fa-solid fa-angle-down"></i>
            <p id='more' className='more'>more</p>
          </div>
        </div>



      </div>



    </div>
  )
}

export default Container
