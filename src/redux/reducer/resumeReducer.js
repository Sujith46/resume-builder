import { RESUME_DATA_TEMPLATE } from "../../config/SampleData";
import {
    RESUME_SET_PROFILE_DETAILS
} from "../ActionTypes";

const initialState = {
    profile: RESUME_DATA_TEMPLATE,
    
};

const ResumeReducer = (state = initialState, action) => {

    switch (action.type) {

        case RESUME_SET_PROFILE_DETAILS:
            state = {
                ...state,
                profile: action.payload
            };
            break;

        default:
            break;

    }

    return state;

};

export default ResumeReducer;