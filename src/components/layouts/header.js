import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Header(){
    return (
        // <!-- Header Start -->
<div className="header-wrap">
  <div className="container">
    <div className="row">
      <div className="col-lg-2 navbar-light">
        <div className="mainlogo">
        <Link activeClassName="active" className="nav-link" to="/" exact={true}><img src={process.env.REACT_APP_BASE_URL+"assets/images/cpc_logo.png"} /></Link >
          </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
      </div>
      <div className="col-lg-10">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button className="close-toggler" type="button" data-toggle="offcanvas"> <span><i className="fas fa-times-circle" aria-hidden="true"></i></span> </button>
            <ul className="navbar-nav mb-2 mb-lg-0 me-auto">

              {/* NavLink is used to Make Active class of Current URL.  */}

              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/" exact={true}>Home</NavLink >
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link " to="/about" exact={true}>About Us</NavLink >
              </li>
              <li className="nav-item">
                
                <NavLink activeClassName="active" className="nav-link" to="/bikes" exact={true}>Bikes</NavLink >
                </li>
              
              <li className="nav-item">
                
                <NavLink activeClassName="active" className="nav-link" to="/staff" exact={true}>Staff</NavLink >
                </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/blog" exact={true}>Blogs</NavLink >
                </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/contact" exact={true}>Contact</NavLink >
                </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/myaccount" exact={true}>My Account</NavLink >
                </li>
                
            </ul>
            <div className="conInfo phonewrp"><span>Call Us Today</span> <a href="tel:4705867168">470-586-7168</a></div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>

);

}
export default Header;
