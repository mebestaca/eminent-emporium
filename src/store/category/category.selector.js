export const selectCategoryMap = (state) => state.category.category.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
}, {});