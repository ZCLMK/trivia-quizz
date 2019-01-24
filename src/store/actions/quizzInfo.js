import * as actions from './actionTypes';

//  Store quizz params ------------------------------------------------------------------------------

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
//  FETCH QUESTIONS ------------------------------------------------------------------------------

const fetchQuizQuestionsStart = () => {
    return {
        type: actions.FETCH_QUIZ_QUESTIONS_START,
        loadingQuestions: true
    }
}

export const fetchQuizQuestions = (category, difficulty, number) => dispatch => {
    dispatch(fetchQuizQuestionsStart());
    const url = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`;
    console.log(url);

    fetch(url)
        .then(data => data.json())
        .then(questions => dispatch(fetchQuizQuestionsSuccess(questions)))
        .catch(e => dispatch(fetchQuizQuestionsFail(e)))
}

const fetchQuizQuestionsSuccess = (data) => {
    console.log(data.results)
    return {
        type: actions.FETCH_QUIZ_QUESTIONS_SUCCESS,
        payload: data.results,
        isLoadingQuestions: false
    }
}
const fetchQuizQuestionsFail = (error) => {
    console.error(error)
    return {
        type: actions.FETCH_QUIZ_QUESTIONS_FAIL,
        error: error,
        isLoadingQuestions: false
    }
}


