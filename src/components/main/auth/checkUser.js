import React from 'react'
import {useSelector} from 'react-redux';
import UserDashboard from '../user/dashboard';
import Login from '../auth/login';
import { Redirect } from 'react-router';

export default function CheckUser() {
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const isLoggedUser = useSelector(state => state.isLoggedUser)
    
    let ExecComp='TEST';
    if(isLoggedIn && isLoggedUser != null ){
        ExecComp=<UserDashboard/>
    }else{
        return <Redirect to='/login'/>;
    }

    return (
        <div>
            {ExecComp}
        </div>
    );
}
