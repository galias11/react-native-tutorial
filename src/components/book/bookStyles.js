// @Vendor
const {
    StyleSheet
} = require('react-native');

// @BaseStyles
const { colors, padding, fonts } = require('../_base');

const styles = StyleSheet.create({
    bookContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    bookHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.primary
    },
    bookImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthor: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bookAuthorText: {
        fontSize: fonts.lg
    },
    bookDescriptionContainer: {
        flex: 3,
        padding: padding.sm,
        backgroundColor: colors.background
    },
    bookButtonsContainer: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.background
    }
});

module.exports = styles;