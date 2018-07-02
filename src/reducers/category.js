// @Vendor
const Immutable = require('immutable');

// @ActionTypes
const actionTypes = require('../actions/actionTypes');

// @Constants
const {
    FETCHEABLE_LIST_PAGE_SIZE
} = require('../constants/index');

const initialState = Immutable.Map({
    error: false,
    isFetching: false,
    success: false,
    lastPage: false,
    books: Immutable.fromJS([]),
    errorReceived: {},
    currentPage: 0
});

function mergeNewItems(currentItems, newItems) {
    return Immutable.fromJS(currentItems.concat(newItems));
}

function fetcheableList(state = initialState, action) {
    switch(action.type) {
        case actionTypes.CATEGORY_FETCH_REQUEST:
            return state.merge({
                error: false,
                isFetching: true,
                success: false
            });  
        case actionTypes.CATEGORY_FETCH_FAILURE:
            return state.merge({
                error: true,
                isFetching: false,
                success: false,
                errorReceived: action.payload.err
            });
        case actionTypes.CATEGORY_FETCH_SUCCESS:
            return state.merge({
                error: false,
                isFetching: false,
                success: true,
                books: Immutable.fromJS(action.payload.data)
            });
        case actionTypes.CATEGORY_NEXT_PAGE_SUCCESS:
            return state.merge({
                error: false,
                isFetching: false,
                success: true,
                lastPage: action.payload.data.length < FETCHEABLE_LIST_PAGE_SIZE,
                currentPage: state.get('currentPage') + 1,
                books: mergeNewItems(state.get('books').toJS(), action.payload.data)
            });
        case actionTypes.CATEGORY_RESET:
            return initialState;
        default:
            return state;
    }
}

module.exports = fetcheableList;