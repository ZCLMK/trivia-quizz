import React from 'react'

const answerBtn = (props) => {
    return (<div className="answer-btn" onClick={() => props.handleClickAnswer()}>
        <p>
            {props.answer}
        </p>
    </div>)
}

export default answerBtn