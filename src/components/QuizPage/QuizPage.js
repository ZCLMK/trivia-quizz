import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerBtn from './AnswerBtn/AnswerBtn';
import { randomizeArray } from '../../utils/utils';
class QuizPage extends Component {

    state = {
        currentQuestionNumber: 0,
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ currentQuestionNumber: this.state.currentQuestionNumber += 1 })
        }, 5000);
    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.questions !== this.props.questions) {
            console.log(this.props.questions);

            let allAnswers = this.props.questions.type === "multiple" ?
                [this.getQuestionProperty('correct_answer'), ...this.getQuestionProperty('incorrect_answers').map(answer => decodeURIComponent(answer))]
                :
                "type vrai ou faux"
            console.log(allAnswers)
        }
    }
    // Accéder aux propriétés de la question actuelle, dont le numéro est à this.state.currentQuestionNumber
    getQuestionProperty = (property) => {
        return this.props.questions ? this.props.questions[this.state.currentQuestionNumber][property] : 'No questions as yet'
    }

    shuffleQuestion = questions => {

    }
    render() {
        let possibleAnswers = [this.getQuestionProperty('correct_answer'), ...this.getQuestionProperty('incorrect_answers')]

        //    mélange les question SI question à choix multiple

        if (this.getQuestionProperty('type') === "multiple") {
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
                            < AnswerBtn answer={answer} />
                        ))}
                    </div>

                </div>
            </div>)
    }
}
// Ajouter 'Vrai ou Faux' our chaque question de ce type


const mapStateToProps = state => {
    return {
        category: state.quizInfo.categoryName,
        numberOfQuestions: state.quizInfo.numberOfQuestions,
        level: state.quizInfo.quizInfo,
        questions: state.quizInfo.questions

    }
}
export default connect(mapStateToProps)(QuizPage)