import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
function Footer(){
    return(
        /* <!-- Footer Start --> */
        <div class="footer-wrap">
        <div class="container">
            <div class="footer-logo text-center"><a href="index.html"><img src="images/cpc_logo.png" alt="" /></a></div>
            <ul class="social_media_footer text-center">
            <li><a href="#"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            </ul>
            <ul class="footer_nav text-center">

            <li className="nav-item">
                <Link  to="/" exact={true}>Home</Link >
              </li>
              <li className="nav-item">
                <Link activeClassName="active" className="nav-link " to="/about" exact={true}>About Us</Link >
              </li>
              <li className="nav-item">
                
                <Link  to="/bikes" exact={true}>Bikes</Link >
                </li>
              
              <li className="nav-item">
                
                <Link  to="/staff" exact={true}>Staff</Link >
                </li>
              <li className="nav-item">
                <Link  to="/blog" exact={true}>Blogs</Link >
                </li>
              <li className="nav-item">
                <Link  to="/contact" exact={true}>Contact</Link >
                </li>
            
            </ul>
            <div class="copyright">Copyright © 2021 cpc motorcycle - All Rights Reserved.</div>
            
        </div>
        </div>
    );
}
export default Footer;