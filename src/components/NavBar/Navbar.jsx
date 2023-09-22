import CartWidget from "../CartWidget/CartWidget"; 
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"></div>

        {/* Brand */}    
        <a href="#" className="navbar-brand">Lemosian Market</a>
        
        {/* Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Weapons</a>
          </li>
          <li>
            <a href="#" className="nav-link">Beasts</a>
          </li>
          <li> 
             <a href="#" className="nav-link">General goods</a>
           </li>
        </ul>

        { /* CartWidget*/ }
        <CartWidget />

        </nav>
    );
};

export default NavBar;