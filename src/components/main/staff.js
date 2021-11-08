import React, { useState , useEffect } from 'react';
import LoaderScreen from '../layouts/loader';
import Breadcrumbs from '../layouts/breadcrumbs';
import Pagination from '../layouts/pagination';

// Redux
import { useSelector, useDispatch } from 'react-redux';  // Use to Access the Store State
import {increament} from '../redux/actions';
import {decrement} from '../redux/actions';
import {login} from '../redux/actions';
import {logout} from '../redux/actions';

function Staff() {

    const counter = useSelector(state=>state.counter);
    const isLogged = useSelector(state=>state.isLogged);
    const dispatch= useDispatch(); // Means assign something to other

    // I am using Hook here , In class we use Constructor but in function we can use Hook 
    const [isLoading,setIsLoading] = useState(true);
    const [pageHeading,setpageHeading] = useState('Our Staff');
    const [staff,setStaff] = useState([]);
    const [apiUrl,setApiUrl]=useState(process.env.REACT_APP_API_URL);

    //Pagination
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(3);


    // Start 
    // const [count,setcount] = useState(1);

    // Get Value from State
    // {this.state.count} 
    // {count}

    // Update State
    // --- this.setState({ 
    //          count:output.count,
    //      })
    
    // -- setCount(count + 1)

    // its similar to componentDidMount 
    useEffect(() => {
        const url = apiUrl+'api/staff';
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setStaff(result.staff);
              setIsLoading(false);
            },
            (error) => {
              setIsLoading(true);
            }
          )
    }, [])

    const indexOfLastPost=currentPage * postsPerPage;
    const indexOfFirstPost=indexOfLastPost - postsPerPage;
    const currentPosts = staff.slice(indexOfFirstPost,indexOfLastPost);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    
    
    return (  
        <div> {/* Must Close all Code in a Single <DIV> */}

            
        <LoaderScreen isLoading={isLoading} />
        <Breadcrumbs header={pageHeading}/>

        {/* <h1>Counter {counter}</h1>
        {isLogged ? <h1>LoggedIN user</h1> : <h1>Signup</h1>}
        
        <button onClick={() => dispatch(increament(5))}>+ Increase Value</button>
        <button onClick={() => dispatch(decrement())}>- Decrease Value</button>
        <button onClick={() => dispatch(login())}>+ Login</button>
        <button onClick={() => dispatch(logout())}>+ Logout</button> */}
            
        {/* <!--Staff start--> */}
        <div class="staffWrapp">
            <div class="container">
                <div class="row">

                
                {currentPosts.map((item) =>
                <div class="team-block col-lg-3 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="image">
                            <a href="#"><img src="assets/images/staff-1.jpg" alt="" /></a>
                            <div class="color-layer"></div>
                            {/* <!-- Social Box --> */}
                            <ul class="social-box">
                                <li><a href="#" class="fab fa-facebook-f"></a></li>
                                <li><a href="#" class="fab fa-twitter"></a></li>
                                <li><a href="#" class="fab fa-instagram"></a></li>
                            </ul>
                        </div>
                        <div class="lower-content">
                            <h5><a href="#">{item.heading}</a></h5>
                            <div class="designation">{item.additional_field_1}</div>
                            <div dangerouslySetInnerHTML={{__html: item.content && item.content.substr(0, 200)+'...'}}></div>
                        </div>
                    </div>
                </div>
                )}

            </div>

            {/* Pagination */}
            <Pagination postsPerPage={postsPerPage} totalPosts={staff.length} paginate={paginate} currentPage={currentPage}/>

        </div>
        </div>
        {/* <!--Staff end--> */}

    </div>
      
      );
    
}
export default Staff;