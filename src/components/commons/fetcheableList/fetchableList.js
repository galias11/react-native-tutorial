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
const styles = require('./fetcheableListStyles');
const {
    colors,
    padding
} = require('../../_base');

// @Components
const LoadingSpinner = require('../loadingSpinner/loadingSpinner'); 

class FetcheableList extends React.Component {
    constructor(props) {
        super(props);
    }

    buildList() {
        const { 
            extractKey,
            handleEndReached,
            handlePress, 
            itemList, 
            itemRender,
            loading
        } = this.props;

        return (
            <FlatList
                data={itemList}
                keyExtractor={extractKey}
                renderItem={({item}) => 
                    <TouchableHighlight
                        style={styles.listItem}
                        underlayColor={colors.primary}
                        onPress={handlePress.bind(this, item.id)}
                    >
                        {itemRender(item)}
                    </TouchableHighlight>
                } 
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.01}
                ListFooterComponent={loading ? <LoadingSpinner /> : undefined}
            />
        );
    }

    buildContent() {
        return this.buildList();
    }

    render() {
        return (
            <View>
                {this.buildContent()}
            </View>
        );
    }
}

FetcheableList.propTypes = {
    extractKey: PropTypes.func.isRequired,
    handleEndReached: PropTypes.func,
    handlePress: PropTypes.func.isRequired,
    itemRender: PropTypes.func.isRequired,
    itemList: PropTypes.array.isRequired,
    loading: PropTypes.bool
};

module.exports = FetcheableList;
