import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/Alto_logo.png';
// https://reacttraining.com/react-router/web/api/NavLink

const Header = () => (
    <header>
        <img src={logo} alt='alto logo' />
        {/*A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.Adde is-active class to sass style file*/}

        <NavLink exact to="/" activeClassName="is-active"> Trip</NavLink>
        <NavLink to="/driver" activeClassName="is-active"> Driver</NavLink>
        <NavLink to="/auto" activeClassName="is-active"> Auto</NavLink>
        <NavLink to="/route" activeClassName="is-active"> Route</NavLink>
    </header>
);

export default Header;