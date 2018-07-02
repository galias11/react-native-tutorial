// @Vendor
const {
    StyleSheet
} = require('react-native');

const colors = {
    primary: '#28F1A6',
    secondary: '#180A32',
    normalText:  '#333333',
    background: '#FFFFFF',
    secondaryBackground: '#CCCCCC'
}

const padding = {
    sm: 10,
    md: 15,
    lg: 20
}

const fonts = {
    sm: 14,
    md: 18,
    lg: 28,
    primary: 'System'
}

const baseStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondaryBackground
    }
});

module.exports = {
    baseStyles,
    colors,
    padding,
    fonts
}