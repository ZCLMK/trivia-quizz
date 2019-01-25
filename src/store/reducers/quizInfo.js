import * as actions from '../actions/actionTypes';
import { decodeApiData } from '../../utils/utils';


const mockState = {
    quizCategory: 15,
    categoryName: 'Science Fiction',
    difficulty: "medium",
    numberOfQuestions: 5,
    isLoadingQuestions: false,
    questions: [
        {
            category: 'Entertainment%3A%20Video%20Games',
            type: 'boolean',
            difficulty: 'medium',
            question: 'DragonForce%27s%20%27Through%20the%20Fire%20and%20Flames%27%20is%20widely%20considered%20to%20be%20the%20hardest%20song%20in%20the%20Guitar%20Hero%20series.',
            correct_answer: 'True',
            incorrect_answers: [
                'False'
            ]
        },
        {
            category: 'Entertainment%3A%20Video%20Games',
            type: 'multiple',
            difficulty: 'medium',
            question: 'How%20many%20zombies%20need%20to%20be%20killed%20to%20get%20the%20%22Zombie%20Genocider%22%20achievement%20in%20Dead%20Rising%20%282006%29%3F',
            correct_answer: '53%2C594',
            incorrect_answers: [
                '53%2C593',
                '53%2C595',
                '53%2C596'
            ]
        },
        {
            category: 'Entertainment%3A%20Video%20Games',
            type: 'multiple',
            difficulty: 'medium',
            question: 'What%20is%20the%20name%20of%20Cream%20the%20Rabbit%27s%20mom%20in%20the%20%22Sonic%20the%20Hedgehog%22%20series%3F',
            correct_answer: 'Vanilla',
            incorrect_answers: [
                'Peach',
                'Strawberry',
                'Mint'
            ]
        },
        {
            category: 'Entertainment%3A%20Video%20Games',
            type: 'boolean',
            difficulty: 'medium',
            question: '%22Return%20to%20Castle%20Wolfenstein%22%20was%20the%20only%20game%20of%20the%20Wolfenstein%20series%20where%20you%20don%27t%20play%20as%20William%20%22B.J.%22%20Blazkowicz.',
            correct_answer: 'False',
            incorrect_answers: [
                'True'
            ]
        },
        {
            category: 'Entertainment%3A%20Video%20Games',
            type: 'multiple',
            difficulty: 'medium',
            question: 'What%20is%20the%20name%20of%20the%20first%20boss%20the%20player%20encounters%20in%20the%202017%20game%2C%20%22Little%20Nightmares%22%3F',
            correct_answer: 'The%20Janitor',
            incorrect_answers: [
                'The%20Warden',
                'The%20Caretaker',
                'The%20Overseer'
            ]
        }
    ]
};
const decodedMock = { ...mockState, questions: decodeApiData(mockState.questions) }


const reducer = (state = decodedMock, action) => {
    switch (action.type) {

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
        // case actions.FETCH_QUIZ_QUESTIONS_FAIL
        default: return state;
    }
}



export default reducer;