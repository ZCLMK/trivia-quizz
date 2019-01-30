import React, { Component } from 'react'
import { connect } from 'react-redux'

class Score extends Component {
    render() {
        return (
            <div id="score">
                <div id="score-box">
                    <h1 id="score-title"> Your Score </h1>
                    <p>{this.props.correctAnswersCount + 1} out of {this.props.answersCount + 1}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    answersCount: state.quizPage.answeredQuestionsCount,
    correctAnswersCount: state.quizPage.correctAnswersCount
})

export default connect(mapStateToProps)(Score);