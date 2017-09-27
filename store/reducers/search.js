import * as ActionTypes from './../actions/action-types';
import _ from 'lodash';

const initialState = {
    results: [],
    error: null
};

export default function search(state = initialState, { type, payload }) {
    switch(type){
        case ActionTypes.SEARCH_START:
            return _.assign({}, state, { isLoading: true });

        case ActionTypes.SEARCH_SUCCESS:
            return _.assign({}, state, { results: payload });

        case ActionTypes.SEARCH_ERRROR:
            return _.assign({}, state, { results: payload });

        default:
            return state;
    }
}