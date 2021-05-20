import {
    RESUME_RESET_PROFILE,
    RESUME_SET_PROFILE
} from "../ActionTypes";

export function setResumeProfile(profile) {
    return {
        type: RESUME_SET_PROFILE,
        payload: profile
    };
};

export function resetResumeProfile() {
    return {
        type: RESUME_RESET_PROFILE
    };
};