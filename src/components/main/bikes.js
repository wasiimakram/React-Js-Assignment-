import React from 'react';
import LoaderScreen from '../layouts/loader';
import Breadcrumbs from '../layouts/breadcrumbs';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Bikes extends React.Component {
    constructor(props){
        super(props);
        this.state=({
            apiUrl:process.env.REACT_APP_API_URL,
            pageHeading:'Bikes',
            isLoading:true,
            bikes:[],
        });
    }

    async componentDidMount(){
        const url = this.state.apiUrl+'api/bikes';
        const response = await fetch(url);
        const output = await response.json();
        this.setState({
            bikes:output.bikes,

            isLoading:false // Hide Loader
        });
    }

    render() {
      return (  
    <div> {/* Must Close all Code in a Single <DIV> */}


        <LoaderScreen isLoading={this.state.isLoading} />

        <Breadcrumbs header={this.state.pageHeading}/> {/* This Show Page Heading */}

        
        
        {/* <!--blogWrapper start--> */}
        <div class="bikeWrap">
            <div class="container">
                <div class="row">
                    
                {this.state.bikes.map((item)=>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="bike-post">
                            <div class="thumb">
                                <a href="#">
                                    <img src={this.state.apiUrl+"uploads/module/services/"+item.featured_img} alt="bike-img" />
                                </a>
                            </div>
                            <div class="post-content">
                            <h3><Link to={{pathname: `blog/case-studies-1`, query: { slug: 'case-studies-1' }}}>{item.heading}</Link></h3>
                            </div>
                        </div>
                    </div>
                )}

                    

                </div>
                
            </div>
        </div>
        {/* <!--blogWrapper end--> */}

    </div>
      
      );
    }
}
export default Bikes;