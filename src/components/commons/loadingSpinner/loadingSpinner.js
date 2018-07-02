// @Vendor
const React = require('react');
const {
    ActivityIndicator,
    Text,
    View
} = require('react-native');

// @Styles
const {
    colors
} = require('../../_base');
const styles = require('./loadingSpinnerStyles');

class LoadingSpinner extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color={colors.secondaryColor}/>
            </View>
        );
    }
}

module.exports = LoadingSpinner;