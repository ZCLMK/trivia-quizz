import React, { Component } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import CategoryPicker from './CategoryPicker/CategoryPicker';
import DifficultyPicker from './DifficultyPicker/DifficultyPicker';
import QuestionNumberPicker from './QuestionNumberPicker/QuestionNumberPicker';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
class Home extends Component {
    state = {
        numberOfQuestions: [5, 10, 20, 50],
        hasQuizParams: false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // Checking that all params have been filled
        if (nextProps.quizCategory && nextProps.quizLevel && nextProps.numberOfQuestions) {
            return { hasQuizParams: true }
        } else {
            return null;
        }
    }

    /**
     * Bouton de valiadtion des params
     * Accessible slt si les params ont été choisis 
     * */

    handleValidateQuiz = () => {
        this.props.onValidateQuizParams(this.props.quizCategory, this.props.quizLevel, this.props.numberOfQuestions)
        this.props.history.push('/taking-quiz')
    }

    render() {
        console.log('props =>,', this.props)
        let submitParamsBtn =
            (<div id="submit-params-wrapper">
                {/* Will be replace with custom btn */}
                <button
                    id="submit-params-btn"
                    disabled={!this.state.hasQuizParams}
                    onClick={this.handleValidateQuiz}>Take Quiz</button>
            </div>)

        return (
            <div id="home">
                < PageHeader />
                < CategoryPicker />
                < DifficultyPicker />
                <QuestionNumberPicker />
                {submitParamsBtn}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    quizCategory: state.quizCategory,
    quizLevel: state.quizLevel,
    numberOfQuestions: state.numberOfQuestions
})

const mapDispatchToProps = dispatch => {
    return {
        onValidateQuizParams: (category, level, numberOfQuestions) => dispatch(actions.fetchQuizQuestions(category, level, numberOfQuestions))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);