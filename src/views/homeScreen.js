// @Vendor
const React = require('react');
const PropTypes = require('prop-types');
const {
    Button,
    View
} = require('react-native');

// @Components
const { Category } = require('../components/category/category');

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        
        this.handleButtonPress = this.handleButtonPress.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }

    static navigationOptions = {
        title: 'react-native tutotial'
    }

    handleButtonPress() {
        const { navigation } = this.props;
        navigation.navigate('Categories');
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
        return (
            <View>
                <Button
                    onPress={this.handleButtonPress}
                    title="Check cateogories"
                />
                <Category 
                    categoryId={0}
                    handlePress={this.handlePress}
                    restrictShowingTo={5}
                />
            </View> 
        );
    }
}

module.exports = HomeScreen;