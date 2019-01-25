import * as actions from './actionTypes'

export const evaluateAnswer = (givenAnswer, correctAnswer) => {
    let isCorrectAnswer = (givenAnswer === correctAnswer);
    return {
        type: actions.EVALUATE_ANSWER,
        payload: isCorrectAnswer
    }
}