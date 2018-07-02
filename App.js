// @Vendor
const React = require('react');
const { createStore, applyMiddleware } = require('redux');
const ReduxThunk = require('redux-thunk').default; 
const { createStackNavigator } = require('react-navigation');
const { Provider } = require('react-redux');
const {
  StyleSheet,
  View,
  YellowBox
} = require('react-native');

// @Components
const BookScreen = require('./src/views/bookScreen')
const HomeScreen = require('./src/views/homeScreen');
const CategoriesScreen = require('./src/views/categoriesScreen');
const CategoryScreen = require('./src/views/categoryScreen');

// @Store
const bookStore = require('./src/reducers/index');

// @Styles
const {
    colors
} = require('./src/components/_base');

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
let store = createStore(bookStore, applyMiddleware(ReduxThunk));

const Navigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Categories: {
            screen: CategoriesScreen
        },
        Category: {
            screen: CategoryScreen
        },
        Book: {
            screen: BookScreen
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.primary
            },
            headerTintColor: colors.normalText,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}

