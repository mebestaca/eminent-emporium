import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPE } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"; 

export const fetchCategoriesStart = () => createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categories) => createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_SUCCESS, categories);

export const fetchCategoriesFailure = (error) => createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_FAILURE, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try{
        const categories = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categories));
    }
    catch(error) {
        dispatch(fetchCategoriesFailure(error));
    }
}