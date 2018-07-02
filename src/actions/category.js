// @ActionTypes
const actionTypes = require('./actionTypes');

// @Constants
const { 
    FETCHEABLE_LIST_PAGE_SIZE,
    CATEGORY_ENDPOINT
} = require('../constants/index');

const dataRequest = () => ({
    type: actionTypes.CATEGORY_FETCH_REQUEST 
});

const dataFailure = (err) => ({
    type: actionTypes.CATEGORY_FETCH_FAILURE,
    payload: {
        err
    }
});

const nextPageSuccess = (data) => ({
    type: actionTypes.CATEGORY_NEXT_PAGE_SUCCESS,
    payload: {
        data
    }
});

const resetList = () => ({
    type: actionTypes.CATEGORY_RESET
});

const urlBuild = (categoryId, page, limit = FETCHEABLE_LIST_PAGE_SIZE) => {
    const endpointUrl = CATEGORY_ENDPOINT;
    const categorySearch = categoryId ? `category_id=${categoryId}&` : '';

    const endpointUrlWithCatId = endpointUrl.replace('{category}', categorySearch);
    const endpointUrlWithPage = endpointUrlWithCatId.replace('{page}', page);
    return endpointUrlWithPage.replace('{limit}', limit);
}

const getNextPageData = (categoryId, limit) => (dispatch, getState) => {
    const nextPage = getState().category.get('currentPage', 1) + 1;
    const sanitizedEndpointUrl = urlBuild(categoryId, nextPage, limit);

    dispatch(dataRequest());
    fetch(sanitizedEndpointUrl)
        .then(response => response.json())
        .then(data => dispatch(nextPageSuccess(data)))
        .catch(err => dispatch(dataFailure(err)));
}

const reset = () => (dispatch) => {
    dispatch(resetList());
}

module.exports = {
    getNextPageData,
    reset
}