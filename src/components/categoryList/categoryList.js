// @Vendor
const React = require('react');
const { connect } = require('react-redux');
const PropTypes = require('prop-types');
const {
    FlatList,
    Text,
    TouchableHighlight,
    View
} = require('react-native');

// @Styles
const styles = require('./categoryListStyles');
const {
    colors,
    padding
} = require('../_base');

// @Components
const FetcheableList = require('../commons/fetcheableList/fetchableList'); 

// @Actions
const categoryListActions = require('../../actions/categoryList');

class CategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.extractKey = this.extractKey.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        const { getData } = this.props;
        getData();
    }

    componentWillUnmount() {
        const { reset } = this.props;
        reset();
    }

    extractKey(item) {
        return item.id;
    }

    renderItem(item) {
        return (
            <Text>
                {item.name}
            </Text>
        );
    }

    buildCategoryList() {
        const { handleSelectCategory,  immCategoryList } = this.props;
        const categories = immCategoryList.get('categories');
        const loading = immCategoryList.get('isFetching');

        return (
            <FetcheableList
                extractKey={this.extractKey}
                handlePress={handleSelectCategory}
                itemList={categories.toJS()}
                itemRender={this.renderItem}
                loading={loading}
            />
        );
    }

    render() {
        return (
            <View>
                {this.buildCategoryList()}
            </View>
        );
    }
}

CategoryList.propTypes = {
    getData: PropTypes.func.isRequired,
    handleSelectCategory: PropTypes.func.isRequired,
    immCategoryList: PropTypes.object.isRequired,
    reset: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        immCategoryList: state.categoryList
    }
}

const mapDispatchToProps = {
    getData: categoryListActions.getData,
    reset: categoryListActions.reset
}

module.exports.CategoryList = connect(mapStateToProps, mapDispatchToProps)(CategoryList);
