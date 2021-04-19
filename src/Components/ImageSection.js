import React from 'react';
import about from '../img/about.jpg';

function ImageSection(props) {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={ about } alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Monsif El Ghazaoui</span></h4>
                <p>
                    I am a Master’s student in the Department of Computer Science at the University of Texas at Dallas graduating in May 2021.
                    I have a Bachelor of Technology degree from the Indian Institute of Technology (IIT) Guwahati.
                </p>
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
                        <p>: 24</p>
                        <p>: Moroccan</p>
                        <p>: English, French, Arabic.</p>
                        <p>: C M SUD BLOC 8 N169 MARRAKECH</p>                        
                    </div>
                </div>
                <button className="btnn">Download Cv</button>
            </div>         
        </div>
    );
}

export default ImageSection;