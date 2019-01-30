
import React from 'react';

const questionNumberBtn = props => {
    return (
        <div
            className="question-number-btn"
            onClick={() => props.handleClick()}>
            {props.number}
        </div>
    )
}

export default questionNumberBtn;