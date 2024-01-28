import axios from 'axios';

import {
    LATEST_NEWS,
    USER_INFO
} from '../redux/newsData/actionType';

const baseUrl = "http://localhost:3001";

export const getLatestNews = () => {
    return dispatch => {
        dispatch({
            type:LATEST_NEWS,
            payload:{data:[]}
        })

        return axios.get(`${baseUrl}/courses`).then((response) => {
            const respData = response.data;
            dispatch({
                type:'LATEST_NEWS',
                payload:{data:respData}
            })
        })
    }
}
export const getUseriinfo=()=>{
    return dispatch=>{
        dispatch({
            type:USER_INFO,
            payload:{data:[]}
        })
        return axios.get(`${baseUrl}/users`).then((response)=>{
            const respData=response.data;
            dispatch({
                type:'USER_INFO',
                payload:{data:respData}
            })
        })
    }
}
