import React, { Component } from 'react'
// lors du clic, si : 
// le bouton a la bonne réponse: il recoit la classe 'correct'
// sinon il recoit la classe incorrect
class AnswerBtn extends Component {
    state = {
        wasClicked: false
    }

    setBtnClass = () => {
        if (this.props.isShowingAnswer) {
            if (this.props.isCorrectAnswer) {
                return 'answer-btn correct'
            } else if (!this.props.isCorrectAnswer && this.state.wasClicked) {
                return 'answer-btn incorrect'
            }
        }
        return 'answer-btn';
    }

    render() {
        return (
            <div className={this.setBtnClass()}
                onClick={() => {
                    this.props.handleClickAnswer()
                    this.setState({ wasClicked: true })
                    this.setBtnClass()
                }}>
                <p>
                    {this.props.answer}
                </p>
            </div>)
    }
}
export default AnswerBtn