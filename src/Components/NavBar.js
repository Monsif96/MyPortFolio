import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../img/Elghazaoui_Monsif.jpg';

function NavBar(props) {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={photo} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active" >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active" >
                            About
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active" >
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active" >
                            Blogs
                        </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active" >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer"><p>@2021 Monsif EL Ghazaoui</p></footer>
            </nav>
        </div>
    );
}

export default NavBar;