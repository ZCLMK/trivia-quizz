import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerBtn from './AnswerBtn/AnswerBtn';
import { randomizeArray } from '../../utils/utils';
import * as actions from '../../store/actions/index';
import Countdown from './Countdown/Countdown';

class QuizPage extends Component {
    state = {
        currentQuestionNumber: 0,
        withCountdown: true,
        hasReceivedAnswer: false // une réponse a-t-elle déja été reçue pour cette question ? 
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log(this.isLastQuestion())
        if (prevState.currentQuestionNumber !== this.state.currentQuestionNumber) {
            this.setState({ hasReceivedAnswer: false })
        }
    }
    // Accéder aux propriétés de la question actuelle, dont le numéro est à this.state.currentQuestionNumber
    getQuestionProperty = (property) => {
        return this.props.questions ? this.props.questions[this.state.currentQuestionNumber][property] : 'No questions as yet'
    }

    handleClickAnswer = (answer, correctAnswer) => {
        // vérifier qu'aucune réponse n'a été reçue pour cette question
        if (!this.state.hasReceivedAnswer) {
            // Vérifier qu'il reste des questions à poser
            if (!this.isLastQuestion()) {
                this.props.evaluateAnswer(answer, correctAnswer);
                this.setState({ hasReceivedAnswer: true }) // ne prends
                this.goToNextQuestion()

            } else { // Plus de questions, aller à la page des résutlats => './quiz-results'
                this.props.history.push('./quiz-results');
            }
        } else {
            console.log("answer received")
        }
    }

    goToNextQuestion = () => {
        this.setState({ withCountdown: false })
        // Wait 5 seconds, then go to the next question (to show the right answer)
        setTimeout(() => {
            // hide the countdown while showing the right answer
            // Check that we don't exceed the number of questions available
            if (this.state.currentQuestionNumber < this.props.numberOfQuestions) {
                this.setState({
                    currentQuestionNumber: this.state.currentQuestionNumber + 1,
                    withCountdown: true
                });
            }
        }, 3000);
        // display countdown again
    }

    isLastQuestion = () => {
        console.log(`current questio nbr: ${this.state.currentQuestionNumber} nbr of questions: ${this.props.numberOfQuestions}`)
        return this.state.currentQuestionNumber === this.props.numberOfQuestions - 1;
    }

    render() {
        let possibleAnswers = null;
        // mettre les 'correct_answers' et les 'incorrect_answers' dans un même array
        if (this.state.currentQuestionNumber < this.props.numberOfQuestions) {
            let possibleAnswersArray = this.props.questions ? [this.getQuestionProperty('correct_answer'), ...this.getQuestionProperty('incorrect_answers')] : null;
            possibleAnswers = possibleAnswersArray ? possibleAnswersArray.map((answer, i) => {
                return < AnswerBtn

                    answer={answer}
                    isCorrectAnswer={answer === this.getQuestionProperty('correct_answer')}
                    isShowingAnswer={!this.state.withCountdown}  // EITHER we are showing the countdown OR the right answer
                    key={i}
                    handleClickAnswer={() => {
                        if (!this.isLastQuestion()) {
                            this.handleClickAnswer(answer, this.getQuestionProperty('correct_answer'))
                        } else {
                            this.props.history.push('./quiz-results')
                            return;
                        }
                    }}
                />
            }) : null
            //    mélange les question SI question à choix multiple

            if (this.getQuestionProperty('type') === "multiple" && !this.isLastQuestion()) {
                possibleAnswersArray = randomizeArray(possibleAnswersArray);
            }
        }

        return (
            <div id="quiz-page">
                <div id="quiz-category">
                    <div className="title-wrapper">
                        <h1>{this.props.category}</h1>
                    </div>
                </div>


                <div id="quiz-box">
                    < Countdown
                        currentQuestion={this.state.currentQuestionNumber}
                        correctAnswer={this.getQuestionProperty('correct_answer')}
                        handleNoAnswer={() => this.handleClickAnswer('', this.getQuestionProperty('correct_answer'))}
                        countdownVisible={this.state.withCountdown}
                    />  {/* utilisé en cas de non réponse */}
                    {/* automatically give wrong answer*/}
                    <div id="question-box">
                        {this.getQuestionProperty('question')}

                    </div>
                    <div id="answers-box">
                        {/* Render all possible answers within a custom component */}
                        {possibleAnswers}
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