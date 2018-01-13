import {GET_APOD_DATA} from "../actions/types";


const apod = (state = {}, action) => {
    switch (action.type){
        case GET_APOD_DATA:

            return state;
        default:
            return state;
    }
}

export default apod;