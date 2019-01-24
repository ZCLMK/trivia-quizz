import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuizPage extends Component {

    state = {
        currentQuestionNumber: 0,
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.questions !== this.props.questions) {
            console.log(this.props.questions);

            let allAnswers = this.props.questions.type == "multiple" ?
                [this.getQuestionProperty('correct_answer'), ...this.getQuestionProperty('incorrect_answers').map(answer => decodeURIComponent(answer))]
                :
                "type vrai ou faux"
            console.log(allAnswers)
        }
    }

    getQuestionProperty = (property) => {
        return this.props.questions ? this.props.questions[this.state.currentQuestionNumber][property] : 'No questions as yet' // mettre un spinner ici
    }

    render() {
        // let allAnswers = [...this.getQuestionProperty('correct_answer'), [...this.getQuestionProperty('incorrect_answers')]]

        return (
            <div id="quiz-page">
                <div id="quiz-category">{this.props.category}</div>
                <div id="quiz-box">
                    <div id="question-box">
                        {decodeURIComponent(this.getQuestionProperty('question'))}
                    </div>
                    <div id="answers-box">

                    </div>

                </div>
            </div>)
    }
}
// Ajouter 'Vrai ou Faux' our chaque question de ce type


const mapStateToProps = state => {
    return {
        category: state.categoryName,
        numberOfQuestions: state.numberOfQuestions,
        level: state.quizLevel,
        questions: state.questions
    }
}
export default connect(mapStateToProps)(QuizPage)