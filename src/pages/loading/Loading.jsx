import React, { useContext } from 'react'
import './Loading.css'
import { LoadingContext } from '../../contexts/LoadingContext'


function Loading() {

    let loadingtext = document.getElementsByClassName('loadingtext')
    const loading = ()=>{
    for(var i = 0;i<loadingtext.length;i++){

      
}}

// const {setload} = useContext(LoadingContext)

//     const setloader  =()=>{
        
//         alert('loaded')
//         alert(1010101111111)

//         if(window.innerWidth < 1000){
//             setload(true)
//             alert('loaded')

//         }
//     }



    return (
        <div className='bg displayfelx textaligncenter felxcenter' >


            <h2  className='loadingtext a1'>L</h2>
            <h2 className='loadingtext a2'>o</h2>
            <h2 className='loadingtext a3'>a</h2>
            <h2 className='loadingtext a4'>d</h2>
            <h2 className='loadingtext a5'>i</h2>
            <h2 className='loadingtext a6'>n</h2>
            <h2 className='loadingtext a7'>g</h2>
            <h2 className='loadingtext a8'>.</h2>
            <h2 className='loadingtext a9'>.</h2>
            <h2 className='loadingtext a10'>.</h2>


        </div>
    )
}

export default Loading
