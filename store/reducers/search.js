import * as ActionTypes from './../actions/action-types';
import _ from 'lodash';

const initialState = {
    results: [],
    error: null
};

const formatResults = results => _.map(results, result => ({
    name: result.name,
    coordinate: {
        longitude: result.location.coordinates[0],
        latitude: result.location.coordinates[1]
    },
    description: result.description,
    rating: result.avgRating,
    distance: Math.round(result.distance),
    address: result.address,
    image: result.image
}))

export default function search(state = initialState, { type, payload }) {
    switch(type){
        case ActionTypes.SEARCH_START:
            return _.assign({}, state, { isLoading: true });

        case ActionTypes.SEARCH_SUCCESS:
            return _.assign({}, state, { results: formatResults(payload.bars) });

        case ActionTypes.SEARCH_ERRROR:
            return _.assign({}, state, { error: payload });

        default:
            return state;
    }
}