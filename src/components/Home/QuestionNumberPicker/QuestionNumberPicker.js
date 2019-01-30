import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index';
import QuestionNumberBtn from './QuestionNumberBtn/QuestionNumberBtn';

class QuestionNumberPicker extends Component {
    state = {
        numberOfQuestions: [5, 10, 20, 50],
        selectedNumber: 5
    }


    handleChooseNumber = (nbr) => {
        console.log("[questionNumberPicker] you chose a number")
        this.setState({ selectedNumber: nbr });
        this.props.onPickNumberOfQuestions(nbr)
    }
    render() {

        let questionNumberPickers = this.state.numberOfQuestions.map(nbr => {
            return (
                <QuestionNumberBtn
                    nbr={nbr}
                    key={nbr}
                    handleClick={() => this.handleChooseNumber(nbr)}
                ></QuestionNumberBtn>
            )
        })

        return (
            <div className="question-number-picker">
                <div className="title-wrapper">
                    <h1>Number of questions</h1>
                </div>
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