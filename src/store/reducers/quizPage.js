import * as actions from '../actions/actionTypes';

const initialState = {
    correctAnswersCount: 0,
    answeredQuestionsCount: 0
}

const quizPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.EVALUATE_ANSWER:
            // augmenter le décompte des bonnes questions de un si bonne réponse, sinon le conserver
            let newCorrectAnswersCount = action.payload === true ? state.correctAnswersCount + 1 : state.correctAnswersCount;
            return {
                ...state,
                correctAnswersCount: newCorrectAnswersCount,
                answeredQuestionsCount: state.answeredQuestionsCount + 1
            }
        default: return state;
    }
}

export default quizPageReducer;
