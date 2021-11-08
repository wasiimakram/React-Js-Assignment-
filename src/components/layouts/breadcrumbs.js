function Breadcrumbs(props){
    return(
        <div class="breadcrumbWrap">
            <div class="container">
                <div class="breadcrumb-content">
                    <h2>{props.header}</h2>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li>{props.header}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
   
}
export default Breadcrumbs