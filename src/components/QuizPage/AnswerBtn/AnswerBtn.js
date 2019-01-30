import React, { Component } from 'react'
// lors du clic, si : 
// le bouton a la bonne réponse: il recoit la classe 'correct'
// sinon il recoit la classe incorrect
class AnswerBtn extends Component {
    state = {
        wasClicked: false
    }

    handleClickBtn = () => {
        this.props.handleClickAnswer()
        this.setState({ wasClicked: true })
    }
    render() {
        let btnId;
        if (this.props.isShowingAnswer) { // si je montre la réponse
            if (this.props.isCorrectAnswer) {
                btnId = 'correct'
            } else if (!this.props.isCorrectAnswer && this.state.wasClicked) {
                btnId = 'incorrect'
            }
        } else {
            btnId = '';
        }
        return (
            <div
                className="answer-btn"
                id={btnId}
                onClick={() => this.handleClickBtn()}>
                <p>{this.props.answer}</p>
            </div>
        )
    }
}
export default AnswerBtn