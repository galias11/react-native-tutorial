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
const styles = require('./categoryStyles');
const {
    colors,
    padding
} = require('../_base');

// @Components
const FetcheableList = require('../commons/fetcheableList/fetchableList'); 

// @Actions
const categoryActions = require('../../actions/category');

class Category extends React.Component {
    constructor(props) {
        super(props);

        this.extractKey = this.extractKey.bind(this);
        this.handleEndReached = this.handleEndReached.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentWillMount() {
        const { reset } = this.props;
        reset();
    }

    componentDidMount() {
        const { categoryId, getNextPageData, restrictShowingTo } = this.props;
        getNextPageData(categoryId, restrictShowingTo);
    }

    handleEndReached() {
        const { 
            categoryId, 
            getNextPageData, 
            immCategory,
            restrictShowingTo
        } = this.props;
        const lastPageReached = immCategory.get('lastPage');
        const loading = immCategory.get('isFetching');

        if(!restrictShowingTo && !lastPageReached && !loading) {
            getNextPageData(categoryId);
        }
    }

    handlePress(bookId) {
        const { handlePress, immCategory } = this.props;
        const immBook = immCategory.get('books').find(immBook => {
            return immBook.get('id') === bookId
        });

        handlePress(immBook);
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
        const { handlePress, immCategory } = this.props;
        const loading = immCategory.get('isFetching');
        const itemList = immCategory.get('books');

        return (
            <FetcheableList
                extractKey={this.extractKey}
                handleEndReached={this.handleEndReached}
                handlePress={this.handlePress}
                itemList={itemList.toJS()}
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

Category.propTypes = {
    categoryId: PropTypes.number,
    getNextPageData: PropTypes.func.isRequired,
    handlePress: PropTypes.func.isRequired,
    immCategory: PropTypes.object.isRequired,
    reset: PropTypes.func.isRequired,
    restrictShowingTo: PropTypes.number
} 


const mapStateToProps = state => {
    return {
        immCategory: state.category
    }
}

const mapDispatchToProps = {
    getNextPageData: categoryActions.getNextPageData,
    reset: categoryActions.reset
}

module.exports.Category = connect(mapStateToProps, mapDispatchToProps)(Category);