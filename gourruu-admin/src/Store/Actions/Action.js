import {
    SET_ADMIN_DETAILS,
} from '../ActionTypes'
export const setAdminDetails =(data)=>{
    // console.log('action',data);
    return {
        type:SET_ADMIN_DETAILS,
        payload:data
    }
}