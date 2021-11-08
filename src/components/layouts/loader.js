function Loader(props){
    /*
    Explain: I am sending a Boolean value in Props i.e. true/false. Here i will check if its true then show the
    Loading. 
     */
    const isLoading = props.isLoading;

    if(isLoading===true){
        return(
            <div id="loader">
            <div class="loading">
                <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
                </div>  
            </div>
            </div>
        )
    }else{
        return(<div></div>);
    }
}
export default Loader