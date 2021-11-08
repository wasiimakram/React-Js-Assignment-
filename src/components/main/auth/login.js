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
  import { Redirect } from 'react-router';
  
// Redux
import {useDispatch,useSelector} from 'react-redux';
import {storeLoginedUser} from '../../redux/actions';
import {login} from '../../redux/actions';

export default function Login() {

    const [isLoading,setIsLoading]=useState(true);
    const [isButtonLoading,setisButtonLoading]=useState(false);
    const [pageHeading]=useState('Login');
    const [apiUrl]=useState(process.env.REACT_APP_API_URL);
    const [ redirect, setRedirect ] = useState(null);
    
    // Form Fields 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Redux
    const dispatch=useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    // Form Submit Method
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setisButtonLoading(true);  // Add Loading Button

        let formData = new FormData();    
        formData.append('email',email);  
        formData.append('password',password);
        
        const url = apiUrl+'api/login';
        axios.post(url, formData) 
        .then(res => {
            setisButtonLoading(false); // Hide Loading Btn
            if(res.data.status == 'success'){
                console.log(res.data.content.user);
                // Store in Redux
                dispatch(storeLoginedUser(res.data.content.user));
                setRedirect(`/myaccount`)
                // return <Redirect to='/myaccount'/>; // Redirect to My Dashboard
            }else if(res.data.status == 'error'){
                swal('Error',res.data.message,'error');
            }
                
        })
        .catch((xhr) => {
            setisButtonLoading(false); // Hide Loading Btn
            console.log(xhr.response.data);
            console.log(xhr.response.data.errors);
            let errors = xhr.response.data.errors;
            let html='';
            Object.keys(errors).map(key => {
                console.log(errors[key][0]);
                html+=errors[key][0];
                html+="\r\n";
            });
            swal('Error',html,'error')
        });
        
    }
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        },500);
        // Check Redirection
        if(isLoggedIn){
            setRedirect(`/myaccount`);
        }
    }, [])
    
    let submitButton;
    if (isButtonLoading===false) {
        submitButton = <Button type="submit" class="btn btn-default btn-primary" variant="primary" > Login</Button>
    }else{
        submitButton = <Button type="submit" class="btn btn-default btn-primary" variant="primary" disabled>{/* <Spinner animation="border" variant="primary" />    */}Processing...</Button>
    }

    if(redirect){
        return <Redirect to={redirect} />
    }else{
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
                                    <h3>Login</h3>
                                    
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="mb-3">
                                            <label class="form-label">Password</label>
                                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id="password" class="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-btnn text-left mb-0">
                                            {submitButton}
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12" style={{marginTop:'20px'}}>
                                        
                                        <Link to="/register" exact={true} style={{textDecoration:'none'}}>Create new Account?</Link >
                                    </div>
                                    
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
}
