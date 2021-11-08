export const increament = (number) => {
    return {
        type:'INCREAMENT',
        payload:number  // this will be a param like
    }
}
export const decrement = () => {
    return {
        type:'DECREMENT'
    }
}
export const login = () => {
    return {
        type:'SIGN_IN'
    }
}
export const logout = () => {
    return {
        type:'LOGED_OUT'
    }
}

// Real Methods
export const storeLoginedUser = (userRecord) =>{
    return {
        type:'LOGED_IN',
        payload:userRecord,
    }
}