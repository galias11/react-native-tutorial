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
    categories: Immutable.fromJS([]),
    errorReceived: {}
});

function categoryList(state = initialState, action) {
    switch(action.type) {
        case actionTypes.CATEGORIES_LIST_FETCH_REQUEST:
            return state.merge({
                error: false,
                isFetching: true,
                success: false
            });  
        case actionTypes.CATEGORIES_LIST_FETCH_FAILURE:
            return state.merge({
                error: true,
                isFetching: false,
                success: false,
                errorReceived: action.payload.err
            });
        case actionTypes.CATEGORIES_LIST_FETCH_SUCCESS:
            return state.merge({
                error: false,
                isFetching: false,
                success: true,
                categories: Immutable.fromJS(action.payload.data)
            });
        case actionTypes.CATEGORIES_LIST_RESET:
            return initialState;
        default:
            return state;
    }
}

module.exports = categoryList;