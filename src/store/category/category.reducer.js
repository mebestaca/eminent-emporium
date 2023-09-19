import { CATEGORY_ACTION_TYPE } from "./category.types";

const INITIAL_STATE = {
    category: []
}

export const categoryReducer = (state = INITIAL_STATE, action={}) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORY_ACTION_TYPE.SET_CATEGORY:
            return {
                ...state,
                category: payload,
            }
        default:
            return state;
    }
}