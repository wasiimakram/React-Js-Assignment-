import React from 'react';
import LoaderScreen from '../layouts/loader';
import Breadcrumbs from '../layouts/breadcrumbs';
import Moment from 'moment';
import Pagination from '../layouts/pagination';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Blogs extends React.Component {

    constructor(props){
        super(props);
        this.state=({
            apiUrl:process.env.REACT_APP_API_URL,
            pageHeading:'Blogs',
            isLoading:true,
            blogs:[],
            currentPage:1,
            postsPerPage:2,
            currentPosts:[],
        });

        this.paginate = this.paginate.bind(this);
        
    }
    async componentDidMount(){
        const url = this.state.apiUrl+'api/blogs';
        const response = await fetch(url);
        const output = await response.json();
        this.setState({
            blogs:output.blogs,
            isLoading:false // Hide Loader
        });
        
        this.paginationCodUpdate(this.state.currentPage);

    }
    paginationCodUpdate(pageNumber){
        const indexOfLastPost=this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost=indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.blogs.slice(indexOfFirstPost,indexOfLastPost);

        this.setState({currentPosts:currentPosts});
        

        // console.log('TEST',this.state.currentPage);
    }
    paginate(pageNumber) {
        // alert('HELLO TESTING HERE ---'+pageNumber);
        // console.log('Click happened',pageNumber);
        this.setState({currentPage:pageNumber});

        this.paginationCodUpdate(pageNumber);
    }
    //  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

    render() {
      return (  
    <div> {/* Must Close all Code in a Single <DIV> */}
        
        <LoaderScreen isLoading={this.state.isLoading} />

        <Breadcrumbs header={this.state.pageHeading}/>

        
        
    {/* <!--blogWrapper start--> */}
    <div class="blogWrapper">
        <div class="container">
            <div class="row">
                {this.state.currentPosts.map((item)=>
                    <div key={item} class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div class="tm-sc-blog mb-4">
                            <article class="post">
                                <div class="entry-header">
                                    <div class="post-thumb">
                                        <div class="post-thumb-inner">
                                            <div class="thumb">
                                                <img class="img-fluid w-100" src={this.state.apiUrl+'uploads/blog/'+item.featured_img} alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="entry-content">
                                    <div class="entry-meta">
                                        <span class="mr-15"><i class="far fa-user-circle"></i> Admin</span>
                                        <span><i class="far fa-comments"></i> 2 Comments</span>
                                    </div>
                                    <h4 class="entry-title">
                                        <a href="#">{item.haeding}</a>
                                    </h4>
                                    <div dangerouslySetInnerHTML={{__html: item.description && item.description.substr(0, 200)+'...'}}></div>
                                    {/* <a href="#"></a> */}
                                    
                                    
                                    <Link to={{pathname: `blog/${item.post_slug}`, query: { slug: item.post_slug }}}>Read More <i class="fas fa-long-arrow-alt-right"></i></Link>
                                    
                                </div>
                                <div class="entry-date">
                                    {Moment(item.dated).format('D-M-Y')}
                                    {/* 20 <br /><span>May</span> */}
                                </div>
                            </article>
                        </div>
                    </div>
                )}
            </div>
            {/* Pagination */}
            <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.state.blogs.length} 
            paginate={this.paginate} 
            currentPage={this.state.currentPage}/>
        </div>
    </div>
    {/* <!--blogWrapper end--> */}

    </div>
      
      );
    }
}
export default Blogs;