import React, { Component } from 'react'

class CategoryThumbnail extends Component {

    state = {
        selected: false
    }

    render() {
        // Change color if category is selected 
        let isSelected = this.props.selected ? " thumb-select" : "";
        return (
            <div
                onClick={this.props.onStoreQuizCategory}
                className={'category-thumbnail' + isSelected}
            >
                <p>{this.props.name} ({this.props.id})</p>
            </div >)
    }
}

export default CategoryThumbnail