import React from 'react';
import about from '../img/Elghazaoui.jpg';

function ImageSection(props) {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={ about } alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Monsif El Ghazaoui</span></h4>
                <br></br>
                <p>
                    I am a ATSEP Engineer (Air traffic safety electronics personnel) first, and Full stack developer from Morocco.
                    Obsessed with detail and quality. I love simple and elegant solutions for every problem.
                </p>
                <br></br>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>                        
                    </div>
                    <div className="right-section">
                        <p>: El Ghazaoui Monsif</p>
                        <p>: 25</p>
                        <p>: Moroccan</p>
                        <p>: Arabic, French, English.</p>
                        <p>: C M SUD BLOC 8 N169 MARRAKECH</p>                        
                    </div>
                </div>
                <br></br>
                <button className="btnn">Download Cv</button>
            </div>         
        </div>
    );
}

export default ImageSection;