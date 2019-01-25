import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerBtn from './AnswerBtn/AnswerBtn';
import { randomizeArray } from '../../utils/utils';
import * as actions from '../../store/actions/index';
import EndPage from '../EndPage/EndPage'
class QuizPage extends Component {

    state = {
        currentQuestionNumber: 1,
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log(this.isLastQuestion())
    }
    // Accéder aux propriétés de la question actuelle, dont le numéro est à this.state.currentQuestionNumber
    getQuestionProperty = (property) => {
        return this.props.questions ? this.props.questions[this.state.currentQuestionNumber][property] : 'No questions as yet'
    }

    handleClickAnswer = (answer, correctAnswer) => {
        // Vérifier qu'il reste des questions à poser
        if (!this.isLastQuestion()) {
            this.props.evaluateAnswer(answer, correctAnswer);
            this.goToNextQuestion()
        } else { // Plus de questions, aller à la page des résutlats => './quiz-results'
            this.props.history.push('./quiz-results');
        }
    }

    goToNextQuestion = () => {
        // Check that we don't exceed the number of questions available

        if (this.state.currentQuestionNumber < this.props.numberOfQuestions) {
            this.setState({ currentQuestionNumber: this.state.currentQuestionNumber + 1 });
        }
    }

    isLastQuestion = () => {
        return this.state.currentQuestionNumber === this.props.numberOfQuestions - 1;
    }

    render() {
        let possibleAnswers = [this.getQuestionProperty('correct_answer'), ...this.getQuestionProperty('incorrect_answers')];

        //    mélange les question SI question à choix multiple

        if (this.getQuestionProperty('type') === "multiple" && !this.isLastQuestion()) {
            possibleAnswers = randomizeArray(possibleAnswers);
        }

        return (
            <div id="quiz-page">
                <div id="quiz-category">
                    <div className="title-wrapper">
                        <h1>{this.props.category}</h1>
                    </div>
                </div>


                <div id="quiz-box">
                    <div id="question-box">
                        {this.getQuestionProperty('question')}
                    </div>
                    <div id="answers-box">
                        {/* Render all possible answers within a custom component */}
                        {possibleAnswers.map(answer => (
                            < AnswerBtn
                                answer={answer}
                                handleClickAnswer={() => {
                                    if (!this.isLastQuestion()) {
                                        this.handleClickAnswer(answer, this.getQuestionProperty('correct_answer'))
                                    } else {
                                        this.props.history.push('./quiz-results')
                                        return;
                                    }
                                }}
                            />
                        ))}
                    </div>

                </div>
            </div>)
    }
}
// Ajouter 'Vrai ou Faux' our chaque question de ce type

const mapDispatchToProps = dispatch => {
    return {
        evaluateAnswer: (givenAnswer, correctAnswer) => dispatch(actions.evaluateAnswer(givenAnswer, correctAnswer))
    }
}

const mapStateToProps = state => {
    return {
        category: state.quizInfo.categoryName,
        numberOfQuestions: state.quizInfo.numberOfQuestions,
        level: state.quizInfo.quizInfo,
        questions: state.quizInfo.questions
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizPage)