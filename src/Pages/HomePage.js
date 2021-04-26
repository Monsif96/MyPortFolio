import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function HomePage() {
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Monsif EL Ghazaoui.</span>
                </h1>
                <p className="h-sub-text">
                    I am a ATSEP Engineer (Air traffic safety electronics personnel) first, and Full stack developer from Morocco.
                    Obsessed with detail and quality. I love simple and elegant solutions for every problem.
                </p>
                <div className="icons">
                    <Link className="icon-holder" to={{ pathname: "https://www.facebook.com/monsiif.raazaouii" }} target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </Link>
                    <Link className="icon-holder" to={{ pathname: "https://github.com/Monsif96" }} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon git"/>
                    </Link>
                    <Link className="icon-holder" to={{ pathname: "https://www.linkedin.com/in/monsif-el-ghazaoui-a852a8140/" }} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ld"/>
                    </Link>
                    <Link className="icon-holder" to={{ pathname: "https://twitter.com/MElghazaoui" }} target="_blank">
                        <FontAwesomeIcon icon={faTwitter} className="icon fb"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}


export default HomePage;