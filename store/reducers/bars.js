import * as ActionTypes from './../actions/action-types';
import _ from 'lodash';

const initialState = {
    data: []
};

export default function bars(state = initialState, { type, payload }) {
    switch(type){
        case ActionTypes.API_SUCCESS:
            return _.assign({}, state, { data: payload });

        default:
            return state;
    }
}