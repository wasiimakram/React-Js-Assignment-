const isLoggedReducer = (state,action) => {
    console.log(action.type);
    switch(action.type){
        case 'LOGED_IN': 
            return true;
        default:
            return null;

    }
}
export default isLoggedReducer;