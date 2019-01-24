import * as actions from '../actions/actionTypes';


const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoadingCategories: action.payload
            }
        case actions.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                isLoadingCategories: action.isLoadingCategories
            };
        case actions.FETCH_CATEGORIES_FAIL:
            return {
                ...state,
                fetchCategoriesError: action.error,
                isLoadingCategories: action.isLoadingCategories
            };

        case actions.STORE_QUIZ_CATEGORY:
            return {
                ...state,
                quizCategory: action.categoryId,
                categoryName: action.categoryName
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
        case actions.FETCH_QUIZ_QUESTIONS_START:
            return {
                ...state,
                isLoadingQuestions: true,
            }

        case actions.FETCH_QUIZ_QUESTIONS_SUCCESS:
            return {
                ...state,
                isLoadingQuestions: action.isLoadingQuestions,
                questions: action.payload
            }

        // case action.FETCH_QUIZ_QUESTIONS_FAIL: 


        default: return state;
    }
}



export default reducer;