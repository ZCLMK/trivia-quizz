import React, { Component } from 'react'
import { connect } from 'react-redux';
import CategoryThumbnail from './CategoryThumbnail/CategoryThumbnail'
import * as actions from '../../../store/actions/quizzInfo'
class CategoryPicker extends Component {
    componentWillMount = () => {
        this.props.onFetchCategories()
    }
    // get rid of anything before a ':' in the name of the category ex: "tech: gadget" => "gadget"
    trimCategoryName = name => {
        let nameAsArray = name.split('');
        let colonIndex = nameAsArray.indexOf(':');
        return nameAsArray.slice(colonIndex + 1)
    }

    render() {
        let categories = this.props.categories ? this.props.categories.map(category => {
            return <CategoryThumbnail
                key={category.id}
                id={category.id}
                name={this.trimCategoryName(category.name)}
                onStoreQuizCategory={() => this.props.onStoreQuizCategory(category.id)}
                selected={category.id === this.props.currentCategory}
            />
        }) :
            null;

        return (
            <div id="categoryPicker" >
                <h1 id="category-title">Categories</h1>
                <div id="categories-grid">
                    {categories}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    currentCategory: state.quizCategory
})

const mapDispatchToProps = dispatch => ({
    onFetchCategories: () => dispatch(actions.fetchAllCategories()),
    onStoreQuizCategory: (id) => dispatch(actions.storeQuizCategory(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPicker);