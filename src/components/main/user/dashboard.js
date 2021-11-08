import React, { useState , useEffect } from 'react';
import LoaderScreen from '../../layouts/loader';
import Breadcrumbs from '../../layouts/breadcrumbs';
import axios from 'axios';
import swal from 'sweetalert';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Redux
import {useDispatch,useSelector} from 'react-redux';
import {storeLoginedUser} from '../../redux/actions';
import {login} from '../../redux/actions';
import {logout} from '../../redux/actions';

export default function Login() {

    const [isLoading,setIsLoading]=useState(true);
    const [pageHeading]=useState('My Account');
    const [apiUrl]=useState(process.env.REACT_APP_API_URL);

    // Redux
    const dispatch=useDispatch();
    const loggedInUser= useSelector(state=>state.isLoggedUser);

    // Form Submit Method
    const handleSubmit = (evt) => {}

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
          }, 500);
    }, [])


    return (
        <div>
        <LoaderScreen isLoading={isLoading} />
        <Breadcrumbs header={pageHeading}/>
        
        {/* <!--Contact start--> */}
            <div class="contWrap">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="align-self-center col-lg-6 col-md-6">
                            <form action="#" class="contact-one__form" onSubmit={handleSubmit}>
                                <div class="block-title text-left">
                                    <h3>Welcome to My Dashboard</h3>
                                    <button onClick={() => dispatch(logout())} className="btn btn-info">Logout</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        {/* <!--Contact end--> */}
        </div>
    )
}
