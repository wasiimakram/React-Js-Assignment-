import React, { useState , useEffect } from 'react';
import LoaderScreen from '../layouts/loader';
import Breadcrumbs from '../layouts/breadcrumbs';

const NotFound = () => {

    const [isLoading,setIsLoading]=useState(false);
    const [pageHeading]=useState('404 Not Found');

    return (
        <div>
            <LoaderScreen isLoading={isLoading} />

            <Breadcrumbs header={pageHeading}/>
            <div class="about-wrap" id="about">
                <div class="container">
                    <div className="alert alert-danger">OOPS! The Content you are looking is unavailable or removed.</div>
                </div>
            </div>
        </div>
        
    );
};

export default NotFound;