import React, { Component } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import CategoryPicker from './CategoryPicker/CategoryPicker';
import DifficultyPicker from './DifficultyPicker/DifficultyPicker';
import QuestionNumberPicker from './QuestionNumberPicker/QuestionNumberPicker';
class Home extends Component {
    state = {
        numberOfQuestions: [5, 10, 20, 50]
    }
    render() {

        return (
            <div id="home">
                < PageHeader />
                < CategoryPicker />
                < DifficultyPicker />
                <QuestionNumberPicker />
            </div>
        )
    }
}

export default Home;