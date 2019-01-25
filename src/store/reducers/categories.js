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

        default: return state;
    }
}



export default reducer;