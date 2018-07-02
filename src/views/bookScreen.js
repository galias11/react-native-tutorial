// @Vendor
const React = require('react');
const PropTypes = require('prop-types');
const {
    View
} = require('react-native');

// @Components
const Book = require('../components/book/book');

class BookScreen extends React.Component {
    constructor(props){
        super(props);

    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.name   
        }
    }
    
    render() {
        const { navigation } = this.props;
        const author = navigation.state.params.author;
        const description = navigation.state.params.description;
        const image = navigation.state.params.image;
        const url = navigation.state.params.url;

        return (
            <Book 
                author={author}
                image={image}
                description={description}
                url={url}
            />
        );
    }
}

module.exports = BookScreen;