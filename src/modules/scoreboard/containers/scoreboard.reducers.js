
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { INCREMENT_SCORE, CLEAR_SCORE } from './constants';


export const value = handleActions(
    {
        [INCREMENT_SCORE]: (state, { payload }) => state + payload,
        [CLEAR_SCORE]: () => 0
    }, 0
);

export default combineReducers({ value })