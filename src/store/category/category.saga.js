import { call, all, put, takeLatest }  from 'redux-saga/effects';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from './category.action';
import { CATEGORY_ACTION_TYPE } from './category.types';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export function* fetchCategoriesAsync() {
    try{
        const categories = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categories));
    }
    catch(error) {
        yield put(fetchCategoriesFailure(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START,
        fetchCategoriesAsync
    );
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}