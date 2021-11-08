import React from 'react';
import $ from 'jquery'; 
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LoaderScreen from '../layouts/loader'
class Home extends React.Component {

    /* Responseivenes of Owl-Coresoul in dynamic phase */

    constructor(props){
      console.log(props);
      super(props);
      this.state={
          baseUrl:process.env.REACT_APP_API_URL,
          isLoading:true,
          testimonialsOwlOptions:{
            loop:true,
            margin:0,
            nav:false,
            autoplay:true,
            autoplayTimeout:3000,
            responsiveClass:true,
            responsive:{
              0:{
              items:1,
              nav:true
              },
              700:{
              items:2,
              nav:true
              },
              1170:{
              items:3,
              nav:true,
              loop:true
              }
            }
          },
          banner:[],
          aboutUs:[],
          widget1:[],
          widget2:[],
          widget3:[],
          widget4:[],
          widget5:[],
          widget6:[],
          testimonials:[],
          vendors:[],
      }
    }
    async componentDidMount() {
      const url = this.state.baseUrl+'api/index';
      const response = await fetch(url);
      const output = await response.json();
      
      this.setState({
        banner: output.banner,
        aboutUs: output.aboutUs,
        widget1: output.widget1,
        widget2: output.widget2,
        widget3: output.widget3,
        widget4: output.widget4,
        widget5: output.widget5,
        widget6: output.widget6,
        testimonials: output.testimonials,
        vendors: output.vendors,

        isLoading:false // Hide Loader
      });
      // console.log(this.state.testimonials);
    }
    render() {
      return (  
    <div> {/* Must Close all Code in a Single <DIV> */}
        
        {/* {this.state.isLoading ? <LoaderScreen /> : null} */}
        
        <LoaderScreen isLoading={this.state.isLoading} />
        

        {/* <!-- Banenr Start --> */}
        <div class="slider-wrap" style={{ background: "url("+this.state.baseUrl+"uploads/module/banner/"
              +this.state.banner.featured_img+") no-repeat top" }}>
          <div class="container">
            <div class="slider_info">
              <div class="sliderbox" >
                  <div dangerouslySetInnerHTML={{__html: this.state.banner.content}}></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Banenr End -->   */}
        
        {/* <!-- About Start --> */}
        <div class="about-wrap" id="about">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 float-right">
                <div class="about_right">
                  <div class="about_box">
                      <div dangerouslySetInnerHTML={{__html: this.state.aboutUs.content}}></div>
                      <div class="btn_text">
                        <a href="about.html">Check it out <img src="assets/images/long_arrow.png" /></a>
                      </div>
                  </div>
                
                </div>
              </div>
              <div class="col-lg-6">
                <div class="aboutImg">
                  <img alt="Image" src={this.state.baseUrl+"uploads/module/cms/"+this.state.aboutUs.featured_img} />
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        {/* <!-- About End -->  */}
        
        {/* <!-- CPC Start --> */}
        <div class="cpc-wrap">
          <div class="container">
              <div dangerouslySetInnerHTML={{__html: this.state.widget1.content}}></div>
          </div>
        </div>
        {/* <!-- CPC End -->  */}
        
        {/* <!-- About Bikes Start --> */}
        <div class="about_bikes_wrap">
          <div class="container">
            
            <div class="row">
              <div class="col-lg-6">
                <div class="bikeWrp">
                  <div class="bike_sec">
                    <div class="title">
                      <h2 dangerouslySetInnerHTML={{__html: this.state.widget2.heading}}></h2>
                    </div>
                    
                      <div dangerouslySetInnerHTML={{__html: this.state.widget2.content}}></div>

                    
                    <div class="btn_text"><a href="#"> Read More <img src="assets/images/long_arrow.png" /></a></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="bikeImg">
                  <img src={this.state.baseUrl+"uploads/widgets/"+this.state.widget2.featured_image} />
                </div>
              </div>
            </div>

            <div class="row engineWrp">
              <div class="col-lg-6 float-right">
                <div class="bikeWrp">
                  <div class="bike_sec">
                    <div class="title">
                    <h2 dangerouslySetInnerHTML={{__html: this.state.widget3.heading}}></h2>
                    </div>

                    <div dangerouslySetInnerHTML={{__html: this.state.widget3.content}}></div>

                    <div class="btn_text"><a href="#"> Read More <img src="assets/images/long_arrow.png" /></a></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="bikeImg">
                <img src={this.state.baseUrl+"uploads/widgets/"+this.state.widget3.featured_image} />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="bikeWrp">
                  <div class="bike_sec">
                    <div class="title">
                    <h2 dangerouslySetInnerHTML={{__html: this.state.widget4.heading}}></h2>
                    </div>
                    
                    <div dangerouslySetInnerHTML={{__html: this.state.widget4.content}}></div>

                    <div class="btn_text"><a href="#"> Read More <img src="assets/images/long_arrow.png" /></a></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="bikeImg">
                <img src={this.state.baseUrl+"uploads/widgets/"+this.state.widget4.featured_image} />
                </div>
              </div>
            </div>


            <div class="readmore text-center"><a href="#">IMPROVE MY Motorcycle NOW</a></div>
          </div>
        </div>
        {/* <!-- About Bikes End -->  */}
        
        {/* <!-- Cruiser Start --> */}
        <div class="cruiser-wrap">
          <div class="container">
            <div class="title">
            <div dangerouslySetInnerHTML={{__html: this.state.widget5.content}}></div>
            </div>
            <div class="btn_text"><a href="#"> Read More <img src="assets/images/long_arrow_white.png" /></a></div>
          </div>
        </div>
        <div class="cruiser_bikeImg">
          <img src={this.state.baseUrl+'uploads/widgets/'+this.state.widget5.featured_image} />
        </div>
        {/* <!-- Cruiser End -->  */}
        
        {/* <!-- Video Start --> */} 
        <div class="video-wrap">
          <div class="container">
          <div class="video_sec" 
          style={{ background: "url("+this.state.baseUrl+"uploads/widgets/"
              +this.state.widget6.featured_image+") no-repeat top" }}
          >
              <div class="playbtn">
                  <a href={this.state.widget6.content} class="video-play mfp-iframe xs-video"><span><i class="fas fa-play"></i></span>   </a> 
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Video End -->  */}
        
        {/* <!-- Testimonials Start --> */}
        <div class="testimonials-wrap">
          <div class="container">
            <div class="title title_center">
              <p>Testimonials</p>
              <h2>What Our Clients Are Saying</h2>
            </div>
            
            
            {this.state.testimonials.length && (
            <OwlCarousel className='owl-theme owl-carousel testimonials_list unorderList' loop margin={10} nav
            options={this.state.testimonialsOwlOptions}>
              
            {this.state.testimonials.map((item) =>
              <li class="item">
                <div class="testimonials_sec">
                  <div class="client_box">
                    <div class="clientImg"><img alt="" src={this.state.baseUrl+'uploads/module/testimonials/'+item.featured_img} /></div>
                    <div class="client_sec">
                      <h3>{item.heading}</h3>
                      <div class="client_location">{item.additional_field_1}</div>
                      <div class="rating"> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> <span><i class="fas fa-star"></i></span> </div>
                    </div>
                  </div>
                      <div dangerouslySetInnerHTML={{__html: item.content}}></div>
                </div>
              </li>
              )}
              </OwlCarousel>
            )}
            
            
          </div>
        </div>
        {/* <!-- Testimonials Start -->  */}
        
        {/* <!-- Appointment  Start --> */}
        <div class="appointment_wrap">
          <div class="container">
            <div class="startedbox">
              <div class="get_info">
                <h3>Book An Appointment</h3>
                <div class="phonenum"><a href="tel:4705867168"><i class="fas fa-phone-alt"></i> (470) 586-7168</a></div>
                <div class="work_time">MON - Sat: 9AM - 9PM</div>
                <div class="readmore"><a href="#"> Book Now</a></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Appointment  End -->  */}
        
        {/* <!-- Vendors Start --> */}
        <div class="vendors_wrap">
          <div class="container">
            <div class="title">
              <h2>Our Vendors</h2>
            </div>
            {this.state.testimonials.length && (
            <OwlCarousel className='owl-theme owl-carousel vender_list' loop={true} margin={30} nav={false} responsiveClass={true}
            items={6}>
              {this.state.vendors.map((val,index) => 
                <li class="item"><img src={'assets/images/'+val} /></li>
              )}
              </OwlCarousel>
            )}
          </div>
        </div>
        {/* <!-- Vendors End -->  */}
    </div>
      
      );
    }
    
}

export default Home;