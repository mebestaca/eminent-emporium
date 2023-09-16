import { CATEGORY_ACTION_TYPE } from "./category.types";

const INITIAL_STATE = {
    categoryMap: {}
}

export const categoryReducer = (state = INITIAL_STATE, action={}) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORY_ACTION_TYPE.SET_CATEGORY_MAP:
            return {
                ...state,
                categoryMap: payload,
            }
        default:
            return state;
    }
}