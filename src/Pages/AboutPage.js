import React from 'react';
import Tittle from "../Components/Tittle";
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import dev from '../img/brain.png';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle tittle={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle tittle={'My Skills'} span={'My Skills'} />
            <div className="skils-container">
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'55%'} />
                <SkillsSection skill={'MySQL'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'PostgreSQL'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Git'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'GitHub'} progress={'60%'} width={'60%'} />
            </div>
            <Tittle tittle={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={ 'Web Design '} text={'I make a professional web design services at affordable rates to help your business attract more visitors and keep them on your site! '} />
                <ServicesSection image={dev} title={ 'Web Development '} text={'I build a website or app from the scratch, developing various functionality, bug fixing, updating, upgrading, migration or solving any other issues, etc.'} />
                {/* <ServicesSection image={intelligence} title={ 'Artificial Intelligence'} text={'LoremShe put his pistol down, picked up her fletcher,and very carefully put a toxin dart through the center.'} /> */}
            </div>
            
        </div>
    );
}

export default AboutPage;