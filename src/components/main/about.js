import React from 'react';
import LoaderScreen from '../layouts/loader';
import Breadcrumbs from '../layouts/breadcrumbs';

class About extends React.Component {

    constructor(props){
      super(props);
      this.state=({
          apiUrl:process.env.REACT_APP_API_URL,
          pageHeading:'About Us',
          isLoading:true,
          about:[],
      });
    }

    async componentDidMount(){
      const url = this.state.apiUrl+'api/about';
      const response = await fetch(url);
      const output = await response.json();
      this.setState({
          about:output.about,

          isLoading:false // Hide Loader
      });
    }

    render() {
      return (  
    <div> {/* Must Close all Code in a Single <DIV> */}

      <LoaderScreen isLoading={this.state.isLoading} />
      
      <Breadcrumbs header={this.state.pageHeading}/>


        {/* <!-- About Start --> */}
        <div class="about-wrap" id="about">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 float-right">
                <div class="about_right">
                  <div class="about_box">
                    
                    <div dangerouslySetInnerHTML={{__html: this.state.about.content}}></div>
                    <div class="btn_text"><a href="about.html">Check it out <img src="assets/images/long_arrow.png" /></a></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="aboutImg"><img alt="" 
                src={this.state.apiUrl+'uploads/module/cms/'+this.state.about.featured_img} /></div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        {/* <!-- About End -->  */}

    </div>
      
      );
    }
}
export default About;