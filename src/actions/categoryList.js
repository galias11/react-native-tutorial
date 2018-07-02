// @ActionTypes
const actionTypes = require('./actionTypes');

// @Constants
const { CATEGORY_LIST_ENDPOINT } = require('../constants/index');

const dataRequest = () => ({
    type: actionTypes.CATEGORIES_LIST_FETCH_REQUEST 
});

const dataSuccess = (data) => ({
    type: actionTypes.CATEGORIES_LIST_FETCH_SUCCESS,
    payload: {
        data
    }
});

const dataFailure = (err) => ({
    type: actionTypes.CATEGORIES_LIST_FETCH_FAILURE,
    payload: {
        err
    }
});

const resetList = () => ({
    type: actionTypes.CATEGORIES_LIST_RESET
});

const getData = () => (dispatch) => {
    dispatch(dataRequest());
    fetch(CATEGORY_LIST_ENDPOINT)
        .then(response => response.json())
        .then(data => dispatch(dataSuccess(data)))
        .catch(err => dispatch(dataFailure(err)));
}

const reset = () => (dispatch) => {
    dispatch(resetList());
}

module.exports = {
    getData,
    reset
}