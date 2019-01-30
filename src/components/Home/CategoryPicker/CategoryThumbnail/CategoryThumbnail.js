import React, { Component } from 'react'

class CategoryThumbnail extends Component {

    state = {
        selected: false
    }
    componentDidMount = () => {
        console.log('../../../../icons/' + this.props.iconName + '.svg')
    }


    render() {
        // Change color if category is selected 
        let isSelected = this.props.selected ? " thumb-select" : "";
        let iconSrc = './icons/' + this.props.iconName + '.svg';
        return (
            <div
                onClick={this.props.onStoreQuizCategory}
                className={'category-thumbnail' + isSelected}>
                <img src={iconSrc} alt={this.props.iconName} />
                <p>{this.props.name}</p>

            </div >)
    }
}

export default CategoryThumbnail