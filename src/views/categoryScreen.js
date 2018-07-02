// @Vendor
const React = require('react');
const PropTypes = require('prop-types');
const {
    View
} = require('react-native');

// @Components
const { Category } = require('../components/category/category');

class CategoryScreen extends React.Component {
    constructor(props){
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    static navigationOptions = {
        title: 'Books by category'
    }

    handlePress(immBook) {
        const { navigation } = this.props;
        const book = immBook ? immBook.toJS() : {};
        const params = {
            name: book.name,
            author: book.author,
            image: book.image,
            description: book.description,
            url: book.url
        }
        navigation.navigate('Book', params);
    }
    
    render() {
        const { navigation } = this.props;
        const categoryIdString = navigation.state.params.itemId;
        const categoryId = categoryIdString ? parseInt(categoryIdString) : 0;

        return (
            <View>
                <Category 
                    categoryId={categoryId}
                    handlePress={this.handlePress}
                />
            </View> 
        );
    }
}

module.exports = CategoryScreen;