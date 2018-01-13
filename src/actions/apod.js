import {GET_APOD_DATA} from "./types";


export const getApodData = (payload) =>{
    return {
        type: GET_APOD_DATA,
        payload: payload
    }
}