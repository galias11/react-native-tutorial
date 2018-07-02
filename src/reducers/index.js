// @Vendor
const { combineReducers } = require('redux');

// @Reducers
const category = require('./category');
const categoryList = require('./categoryList');

const bookStore = combineReducers({
    category,
    categoryList
});

module.exports = bookStore;