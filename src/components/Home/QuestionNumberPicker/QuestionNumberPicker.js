import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/quizzInfo';

class QuestionNumberPicker extends Component {
    state = {
        numberOfQuestions: [5, 10, 20, 50]
    }

    render() {

        let questionNumberPickers = this.state.numberOfQuestions.map(nbr => {
            return (
                <div
                    className="question-number-btn"
                    key={nbr}
                    onClick={() => this.props.onPickNumberOfQuestions(nbr)}
                >{nbr}</div>
            )
        })

        return (
            <div className="question-number-picker">
                <div className="" id="question-number-wrapper">
                    {questionNumberPickers}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPickNumberOfQuestions: (nbr) => dispatch(actions.storeNumberOfQuestions(nbr))
    }
}
export default connect(null, mapDispatchToProps)(QuestionNumberPicker);