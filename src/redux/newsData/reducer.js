import {
    LATEST_NEWS,
    USER_INFO
} from './actionType';

export const initialState = {};

export default(state=initialState,action) => {
    switch(action.type){
        case 'LATEST_NEWS':{
            return{
                ...state,
                latestNews:action.payload
            }
        }
       case ' USER_INFO':{
        return{
            ...state,
            latestUserInfo:action.payload
        }
       }
       
        default: 
            return state
    }
}