// @Vendor
const React = require('react');
const PropTypes = require('prop-types');
const {
    Text,
    View
} = require('react-native');

// @Components
const { CategoryList } = require('../components/categoryList/categoryList');

class CategoriesScreen extends React.Component {
    constructor(props){
        super(props);

        this.handleSelectCategory = this.handleSelectCategory.bind(this);
    }
    
    static navigationOptions = {
        title: 'Categories'
    }

    handleSelectCategory(itemId){
        const { navigation } = this.props;
        navigation.navigate('Category', {itemId});
    }
    
    render() {
        return (
            <View>
                <CategoryList 
                    handleSelectCategory={this.handleSelectCategory}
                />
            </View>
        );
    }
}

module.exports = CategoriesScreen;