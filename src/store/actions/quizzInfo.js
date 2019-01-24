import * as actions from './actionTypes';


export const fetchAllCategories = () => dispatch => {
    //    api call to 'https://opentdb.com/api_category.php'
    fetch('https://opentdb.com/api_category.php')
        .then(res => res.json())
        .then(data => dispatch(fetchAllCategoriesSuccess(data.trivia_categories)))
        .catch(e => dispatch(fetchAllCategoriesFail(e)))
}

export const fetchAllCategoriesSuccess = (categories) => {
    console.log(categories)
    return {
        type: actions.FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const fetchAllCategoriesFail = (error) => {
    console.log(error)
    return {
        type: actions.FETCH_CATEGORIES_FAIL,
        error: true
    }
}
// dispatcher actions pour erreur et success

export const storeQuizCategory = (categoryId) => {

    return {
        type: actions.STORE_QUIZ_CATEGORY,
        payload: categoryId
    }
}

export const storeQuizLevel = (level) => {
    console.log(level)
    return {
        type: actions.STORE_QUIZ_LEVEL,
        payload: level
    }
}

export const storeNumberOfQuestions = (number) => {
    console.log(number)
    return {
        type: actions.STORE_NUMBER_OF_QUESTIONS,
        payload: number
    }
}