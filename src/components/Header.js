import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/Alto_logo.png';
import profile from '../images/Profile_icon.png';
import vibes from '../images/Vibes_icon.png';

// https://reacttraining.com/react-router/web/api/NavLink

const Header = () => (
    <header className="header">
        <div className="container container--spacebetween container--centered">
            <img src={profile} alt='profile' className="header__img--side" />

            <img src={logo} alt='alto logo' className="header__img" />
            {/*A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.Adde is-active class to sass style file*/}
            <img src={vibes} alt='vibes' className="header__img--side" />

        </div>
        <div className="container container--centered container--center container--flexwrap">
            <div className="nav__item nav--marginRight">
                <NavLink
                    exact to="/"
                    activeClassName="is-active"
                    className="Nav_link"
                >
                    Trip
                </NavLink>
            </div>

            <div className="nav__item nav--marginRight">
                <NavLink
                    to="/driver"
                    activeClassName="is-active"
                    className="Nav_link"
                >
                    Driver
                </NavLink>
            </div>

            <div className="nav__item nav--marginRight">
                <NavLink
                    to="/vehicle"
                    activeClassName="is-active"
                    className="Nav_link"
                >
                    Vehicle
                </NavLink>
            </div>

            <div className="nav__item">
                <NavLink
                    to="/route"
                    activeClassName="is-active"
                    className="Nav_link"
                >
                    Route
                </NavLink>
            </div>
        </div>
    </header>
);

export default Header;