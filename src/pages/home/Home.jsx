import React, { useContext } from 'react'
import './Home.css'
import Loading from '../loading/Loading'
import { LoadingContext } from '../../contexts/LoadingContext'
import Header from '../header/Header'
import Container from '../container/Container'
import Footer from '../footer/Footer'

function Home() {
    const { load } = useContext(LoadingContext)
    const Sorter = ()=>{
        if(load || window.innerWidth< 425){
            return(
                <Homeafterloading/>
            )
        }else{
            return(
                // <Homeafterloading/>
                <Loading/>
            )
        }
    }
    setInterval(Sorter, 500)
    return (
        <div className='bg'>
            <Sorter/>


        </div>
    )
}


function Homeafterloading() {
    return (
        <div className='bg'>
            <Header />
            <Container />
            <Footer/>
            
        </div>
    )
}



export default Home
