import { CATEGORY_ACTION_TYPE } from "./category.types";

const INITIAL_STATE = {
    category: [],
    isLoading: false,
    error: null
}

export const categoryReducer = (state = INITIAL_STATE, action={}) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START:
            return {
                ...state,
                isLoading: true,
            }
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload,
            }
        case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                category: payload,
                isLoading: false,
            }
        default:
            return state;
    }
}