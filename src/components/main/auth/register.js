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
export default function Register() {

    const [isLoading,setIsLoading]=useState(true);
    const [isButtonLoading,setisButtonLoading]=useState(false);
    const [pageHeading]=useState('Register');
    const [apiUrl]=useState(process.env.REACT_APP_API_URL);
    // Form Fields 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

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
                swal('Success',res.data.message,'success');
                setEmail('');setPassword('');
            }
            else if(res.data.status == 'error'){
                swal('Error',res.data.message,'error');
            }
        })
        .catch((xhr) => {
            setisButtonLoading(false); // Hide Loading Btn
            console.log(xhr.response.data);
            console.log(xhr.response.data.errors);
            let errors = xhr.response.data.errors;
            Object.keys(errors).map(key => {
                console.log(errors[key][0]);
                swal('Error',errors[key][0],'error')
            });
        });
        
    }

    useEffect(() => {
        // setIsLoading(false);
        setTimeout(() => {
            setIsLoading(false);
          }, 500);
    }, [])
    let submitButton;
    if (isButtonLoading===false) {
        submitButton = <Button type="submit" class="btn btn-default btn-primary" variant="primary" > Login</Button>
    }else{
        submitButton = <Button type="submit" class="btn btn-default btn-primary" variant="primary" disabled>{/* <Spinner animation="border" variant="primary" />    */}Processing...</Button>
    }

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
                                    <h3>{pageHeading}</h3>
                                    
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="mb-3">
                                            <label class="form-label">Name</label>
                                            <input type="text" value={name} onChange={e => setName(e.target.value)} 
                                            name="name" id="name" class="form-control" />
                                        </div>
                                    </div>
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
