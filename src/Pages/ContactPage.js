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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27520.712823337544!2d-9.579370122775128!3d30.433575931495135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b616b7f0c3d1%3A0x8eb5ace4ec157f19!2sCit%C3%A9%20Al%20Mohammadi%2C%20Agadir%2080000!5e0!3m2!1sen!2sma!4v1619045456380!5m2!1sen!2sma" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+212 655702024'} text2={'+212 655702024'} title={'Phone'} />
                    <ContactItem icon={emailme} text1={'M.Elghazaoui@onda.ma'} text2={'Elghazaouimonsif@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'C M SUD BLOC 8 NO 169'} text2={'MARRAKECH'} title={'Adress'} />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;