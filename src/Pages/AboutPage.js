import React from 'react';
import Tittle from "../Components/Tittle";
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle tittle={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle tittle={'My Skills'} span={'My Skills'} />
            <div className="skils-container">
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'77%'} width={'77%'} />
                <SkillsSection skill={'MySQL'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'65%'} width={'65%'} />
            </div>
            
        </div>
    );
}

export default AboutPage;