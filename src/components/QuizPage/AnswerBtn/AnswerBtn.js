import React from 'react'

const answerBtn = (props) => {
    return (<div className="answer-btn">
        <p>
            {props.answer}
        </p>
    </div>)
}

export default answerBtn