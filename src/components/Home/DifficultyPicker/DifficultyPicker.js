import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class DifficultyPicker extends Component {

    render() {
        let easyClass = this.props.quizLevel === 'easy' ? ' select-easy' : '';
        let mediumClass = this.props.quizLevel === 'medium' ? ' select-medium' : '';
        let hardClass = this.props.quizLevel === 'hard' ? ' select-hard' : '';
        // créer une variable pr chq classe CSS de niveau, la faire varier selon le niveau choisi
        return (
            <div id="difficultyPicker">
                <div id="difficulty-wrapper">
                    <div className={'difficulty-btn' + easyClass} onClick={() => this.props.onSelectLevel("easy")}>Easy</div>
                    <div className={'difficulty-btn' + mediumClass} onClick={() => this.props.onSelectLevel("medium")}>Medium</div>
                    <div className={'difficulty-btn' + hardClass} onClick={() => this.props.onSelectLevel("hard")}>Hard</div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({

// })
const mapDispatchToProps = dispatch => {
    return {
        onSelectLevel: (level) => dispatch(actions.storeQuizLevel(level))
    }
}

const mapStateToProps = state => {
    return {
        quizLevel: state.quizInfo.quizLevel
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DifficultyPicker);