import * as actions from '../actions/actionTypes';


const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            };
        case actions.FETCH_CATEGORIES_FAIL:
            return {
                ...state,
                fetchCategoriesError: action.error
            };

        case actions.STORE_QUIZ_CATEGORY:
            return {
                ...state,
                quizCategory: action.payload
            }

        case actions.STORE_QUIZ_LEVEL:
            return {
                ...state,
                quizLevel: action.payload
            }
        case actions.STORE_NUMBER_OF_QUESTIONS:
            return {
                ...state,
                numberOfQuestions: action.payload
            }

        default: return state;
    }
}



export default reducer;