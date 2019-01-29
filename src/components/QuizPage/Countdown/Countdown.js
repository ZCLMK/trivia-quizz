import React, { Component } from 'react'

let myCountDown = null; //permet de reset réellement la valeur;

class Countdown extends Component {
    state = {
        remainingTime: null,
    }
    componentDidMount() {
        this.resetCountDown()
    }
    componentDidUpdate(prevprops) {
        //  Trigger when new question 
        if (prevprops.currentQuestion !== this.props.currentQuestion) {
            this.resetCountDown();
        }
        if (this.props.countdownVisible === false) {
            clearInterval(myCountDown)
        }
    }

    resetCountDown() {

        this.setState({ remainingTime: 10 })

        if (myCountDown) {
            clearInterval(myCountDown);
        }
        myCountDown = setInterval(() => {
            this.setState({ remainingTime: this.state.remainingTime - 1 })
            console.log(this.state.remainingTime)

            // this.getRemainingTime(remainingTime) // make remaining time available throughout the whole component
            if (this.state.remainingTime === 0) {
                this.props.handleNoAnswer()
            }
        }, 1000)

    }

    componentWillUnmount = () => {
        clearInterval(myCountDown);
    }


    render() {
        // let correctClass = this.props.countdownVisible 
        let countDown = this.props.countdownVisible ? (
            <div id='Countdown'>
                {this.state.remainingTime}
            </div>
        ) : null;


        return countDown
    }
}
export default Countdown;
