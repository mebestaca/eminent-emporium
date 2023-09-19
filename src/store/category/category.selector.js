import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (category) => category.category
    
)

export const selectCategoryMap = createSelector(
    [selectCategories],
    (category) => 
        category.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
)

