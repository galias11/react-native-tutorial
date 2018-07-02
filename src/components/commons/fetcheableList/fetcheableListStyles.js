// @Vendor
const {
    StyleSheet
} = require('react-native');

// @BaseStyles
const { colors, padding, fonts } = require('../../_base');

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: padding.md,
        backgroundColor: colors.background
    }
});

module.exports = styles;