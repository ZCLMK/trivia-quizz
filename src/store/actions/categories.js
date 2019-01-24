import * as actions from "./actionTypes";

const fetchAllCategoriesStart = () => {
    return {
        type: actions.FETCH_CATEGORIES_START,
        payload: true
    }
}

export const fetchAllCategories = () => dispatch => {
    //    api call to 'https://opentdb.com/api_category.php'
    dispatch(fetchAllCategoriesStart());
    fetch('https://opentdb.com/api_category.php')
        .then(res => res.json())
        .then(data => dispatch(fetchAllCategoriesSuccess(data.trivia_categories)))
        .catch(e => dispatch(fetchAllCategoriesFail(e)))
}

const fetchAllCategoriesSuccess = (categories) => {
    console.log(categories)
    return {
        type: actions.FETCH_CATEGORIES_SUCCESS,
        payload: categories,
        isLoadingCategories: false
    }
}

const fetchAllCategoriesFail = (error) => {
    console.log(error)
    return {
        type: actions.FETCH_CATEGORIES_FAIL,
        error: true,
        isLoadingCategories: false
    }
}