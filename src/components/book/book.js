// @Vendor
const React = require('react');
const PropTypes = require('prop-types');

// @Styles
const styles = require('./bookStyles');

// @Components
const {
    Alert,
    Button,
    Linking,
    Image,
    Text,
    View
} = require('react-native');

// @Constants
const {
    ALERT_TITLE,
    ALERT_LINK_ERROR_MSG,
    BOOK_IMAGE_HEIGHT,
    BOOK_IMAGE_WIDTH,
    BUTTON_MSG
} = require('../../constants/index');

class Book extends React.Component{
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(){
        const { url } = this.props;

        Linking.openURL(url)
            .catch(err => {
                Alert.alert(
                    ALERT_TITLE,
                    `${ALERT_LINK_ERROR_MSG}: ${err}`
                );
            });
    }

    buildImageContainer() {
        const { image } = this.props;

        return (
            <View style={styles.bookImage}>
                <Image 
                    style={{height: BOOK_IMAGE_HEIGHT, width: BOOK_IMAGE_WIDTH}}
                    source={{uri: image}}/>
            </View>
        );
    }

    buildHeader() {
        const { author } = this.props;

        return (
            <View style={styles.bookHeaderContainer}>
                {this.buildImageContainer()}
                <View style={styles.bookAuthor}>
                    <Text>
                        by
                        <Text style={styles.bookAuthorText}>
                            {author}
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }

    buildButtons() {
        return (
            <View style={styles.bookButtonsContainer}>
                <Button
                    title={BUTTON_MSG}
                    onPress={this.handlePress}>
                </Button>
            </View>
        );
    }

    buildDescription() {
        const { description } = this.props;

        return (
            <View style={styles.bookDescriptionContainer}>
                <Text>
                    {description}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.bookContainer}>
                {this.buildHeader()}
                {this.buildDescription()}
                {this.buildButtons()}
            </View>
        );
    }
}

Book.propTypes = {
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

module.exports = Book;