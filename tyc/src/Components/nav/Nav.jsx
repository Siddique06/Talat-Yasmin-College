import React from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (

        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        
                        <div className="logo"><img src="./assests/tyc.jpg" alt="" /></div>
                        <span> Talat Yasmin College</span>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Admission"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Admission
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/ApplyOnline"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Apply Online
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/AboutUs"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About TYC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/staff"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Staff
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Event"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Events
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/ContactUs"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>

    )
}
