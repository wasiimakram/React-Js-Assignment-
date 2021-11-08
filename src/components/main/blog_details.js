import React from 'react';
import LoaderScreen from '../layouts/loader';
import Breadcrumbs from '../layouts/breadcrumbs';
import Moment from 'moment';

class BlogsDetails extends React.Component {

    constructor(props){
        super(props);
        // const slug=this.props.location.query.slug; // By Location Method
        const slug=this.props.match.params.slug; // By URL
        this.state=({
            apiUrl:process.env.REACT_APP_API_URL,
            pageHeading:'Blogs Details',

            isLoading:true,
            blog_details:[],
            slug:slug,
        }); 
    }
    async componentDidMount(){
        const url = this.state.apiUrl+'api/blogs_details/'+this.state.slug;
        const response = await fetch(url);
        const output = await response.json();
        this.setState({
        blog_details:output.blog_details,

        isLoading:false // Hide Loader
        });
    }
    


    render() {
      return (  
    <div> {/* Must Close all Code in a Single <DIV> */}
        
        <LoaderScreen isLoading={this.state.isLoading} />

        <Breadcrumbs header={this.state.pageHeading}/>

        
        
        {/* <!--blogWrapper start--> */}
        <div class="bikeWrap">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="entry-content">
                        <h4>{this.state.blog_details.title}</h4>

                        <div dangerouslySetInnerHTML={{__html:this.state.blog_details.description}}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {/* <!--blogWrapper end--> */}

    </div>
      
      );
    }
}
export default BlogsDetails;