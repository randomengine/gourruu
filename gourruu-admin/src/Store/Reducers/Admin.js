import { 
    SET_ADMIN_DETAILS,
 } from '../ActionTypes'
const initialState = {
    adminDetails: [],
}
export default function adminDetails(state = initialState, action) {
    switch (action.type) {
        case SET_ADMIN_DETAILS:
            // console.log('reducer',action.payload);
            // return [
            //     ...state,
            //     {adminDetails: action.payload}
            // ]
            return {...state, adminDetails: action.payload };

        default:
            return state;
    }


}