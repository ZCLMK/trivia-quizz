import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryThumbnail from './CategoryThumbnail/CategoryThumbnail';
import * as actions from '../../../store/actions/index';
// import * as icons from '../../icons';
class CategoryPicker extends Component {
    componentWillMount = () => {
        this.props.onFetchCategories()
    }
    // get rid of anything before a ':' in the name of the category ex: "tech: gadget" => "gadget"
    trimCategoryName = name => {
        let nameAsArray = name.split('');
        let colonIndex = nameAsArray.indexOf(':');
        return nameAsArray.slice(colonIndex + 1).join('')
    }

    render() {
        let categories = this.props.categories ? this.props.categories.map(category => {
            return <CategoryThumbnail
                key={category.id}
                id={category.id}
                name={this.trimCategoryName(category.name)}
                // icon={this.renderIcon()}
                onStoreQuizCategory={() => this.props.onStoreQuizCategory(category.id, this.trimCategoryName(category.name))}
                selected={category.id === this.props.currentCategory}
            />
        }) :
            null;

        return (
            <div id="categoryPicker" >
                <div className="title-wrapper">
                    <h1 id="category-title">Categories</h1>
                </div>

                <div id="categories-grid">
                    {categories}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    currentCategory: state.quizInfo.quizCategory
})

const mapDispatchToProps = dispatch => ({
    onFetchCategories: () => dispatch(actions.fetchAllCategories()),
    onStoreQuizCategory: (id, name) => dispatch(actions.storeQuizCategory(id, name))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPicker);