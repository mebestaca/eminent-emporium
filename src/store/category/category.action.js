import { createAction } from "@reduxjs/toolkit";
import { CATEGORY_ACTION_TYPE } from "./category.types";

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORY_ACTION_TYPE.SET_CATEGORY_MAP, categoriesMap);