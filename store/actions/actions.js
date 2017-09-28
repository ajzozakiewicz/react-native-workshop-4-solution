import * as ActionTypes from './action-types';
import * as helpers from './helpers';
import config from 'react-native-configs';

export function searchBars(text, lat, long) {
    return (dispatch) => {
        dispatch(helpers.startAction(ActionTypes.SEARCH_START))
        return fetch(`${config.barApi}?lat=${lat}&long=${long}&name=${text}`).then((response) => {
            if(response.status !== 200){
                throw new Error('error', response.statusText);
            }
            return response.json();
        })
        .then((json) => {
            return dispatch(helpers.successAction(ActionTypes.SEARCH_SUCCESS, json))
        })
        .catch((error) => {
            console.log(error);
            dispatch(helpers.failureAction('ERROR', error))
        });
    };
}

// export function fetchInitialState() {
//     return (dispatch) => {
//         dispatch(fetchsomething());
//     };
// }