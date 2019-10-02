import { createAction } from 'redux-actions';
import { INCREMENT_SCORE, CLEAR_SCORE } from './constants';

export const incrementScore = createAction(INCREMENT_SCORE);
export const clearScore = createAction(CLEAR_SCORE);