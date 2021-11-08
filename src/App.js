import React from 'react';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Home from './components/main/index';
import About from './components/main/about';
import Bikes from './components/main/bikes';
import Staff from './components/main/staff';
import Blogs from './components/main/blogs';
import BlogDetail from './components/main/blog_details';
import Contact from './components/main/contact';
import Login from './components/main/auth/login';
import Register from './components/main/auth/register';
import NotFoundPage from './components/layouts/404_page';

import UserDashbord from './components/main/auth/checkUser';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 



function App(){
  
  return (
    <div className="App">
      
        <Router>
            <Header /> {/* Rest Header Code present in header.js file , just navigation here */}
            
            <Switch>
                
                {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/bikes" component={Bikes} ></Route>
                <Route exact path="/staff" component={Staff}></Route>
                <Route exact path="/blog" component={Blogs}></Route>
                <Route exact path="/blog/:slug" component={ BlogDetail } />
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/myaccount" component={UserDashbord}></Route>
                <Route  component={NotFoundPage}></Route>
            
            </Switch>
            <Footer />
        </Router>

        

    </div>
  );
}

export default App;
