import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Monsif EL Ghazaoui.</span>
                </h1>
                <p className="h-sub-text">
                    I am a Master’s student in the Department of Computer Science at the University of Texas at Dallas graduating in May 2021.
                    I have a Bachelor of Technology degree from the Indian Institute of Technology (IIT) Guwahati.
                </p>
                <div className="icons">
                    <FontAwesomeIcon icon={faFacebook}/>
                </div>
            </header>
        </div>
    )
}


export default HomePage;