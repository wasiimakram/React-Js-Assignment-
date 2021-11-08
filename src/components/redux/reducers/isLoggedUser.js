const isLoggedReducer = (state,action) => {
    switch(action.type){
        case 'LOGED_IN': 
            return action.payload;
        case 'LOGED_OUT':
            return null;
        default:
            return null;

    }
}
export default isLoggedReducer;