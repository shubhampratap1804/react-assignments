import React from 'react'
import mypicture from '../1-intro-photo-final.jpg'
import '../App.css';

function Home() {

  return (
    <div className='container'>
        <div className='row'>
            <div className="col-12 col-md-6" >
                <img src={mypicture} alt='Profile Picture'/>
            </div>
            <div className="col-12 col-md-6">
                <h3>Hi! My name is Shubham Pratap Singh, Software Engineer graduated from MIT.</h3>
                <p>My aim is to join NASA and contribute in the betterment of mankind. Currently I am working
                    for a private space agency which develops transportal vehicle for space, located at New Jersey.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home
