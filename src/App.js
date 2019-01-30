import React, { Component } from 'react';
import Home from './components/Home/Home';
import Header from './components/PageHeader/PageHeader';
import QuizPage from './components/QuizPage/QuizPage';
import Score from './components/Score/Score';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      < Router >
        <div className="App">
          < Header />
          {/* Que se passe-t-il quand la route n'existe pas ?? */}
          <Route path="/" exact component={Home} />
          <Route path="/taking-quiz" exact component={QuizPage} />
          <Route path="/quiz-results" exact component={Score} />
        </div>
      </ Router>
    );
  }
}

export default App;
