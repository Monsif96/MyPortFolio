import React from 'react';
import ContactItem from '../Components/ContactItem';
import Tittle from "../Components/Tittle";
import phone from '../img/phone.svg'
import emailme from '../img/emailme.svg'
import location from '../img/location.svg'

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle tittle={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.3299019522788!2d-7.994061596453097!3d31.65219288517858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafedd7f778874f%3A0x35db7716fea97c2c!2sDaoudiate%2C%20Marrakesh%2040000!5e0!3m2!1sen!2sma!4v1619474999908!5m2!1sen!2sma" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+212 655702024'} text2={'+212 644860626'} title={'Phone'} />
                    <ContactItem icon={emailme} text1={'M.Elghazaoui@onda.ma'} text2={'Elghazaouimonsif@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'C M SUD BLOC 8 NO 169'} text2={'MARRAKECH'} title={'Adress'} />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;