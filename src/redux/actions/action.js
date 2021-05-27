import {
    RESUME_SET_PROFILE_DETAILS,
} from "../ActionTypes";

export function setResumeProfile(profile) {
    return {
        type: RESUME_SET_PROFILE_DETAILS,
        payload: profile
    };
};
