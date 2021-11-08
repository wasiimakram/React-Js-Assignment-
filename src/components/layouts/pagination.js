import React from 'react';

const Pagination = ({postsPerPage , totalPosts,paginate,currentPage}) => {
    // paginate is coming as Props buts its actually a function
    const pageNumbers =[];
    for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div class="paginationWrap">
        <nav>
            <ul className="pagination">
            {pageNumbers.map(number => (
                <li id={number} key={number} className={"page-item "+ (number === currentPage ? 'active' : '')} >
                    {/* {console.log(number,currentPage)} */}
                    <a onClick={() => paginate(number)} className="page-link "> 
                    {/* Onclick Method present in main file. */}
                        {number}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
        </div>
    );
};

export default Pagination;