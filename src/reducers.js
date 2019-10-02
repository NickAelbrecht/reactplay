import { combineReducers } from 'redux';

import scoreReducers from './modules/scoreboard/containers/scoreboard.reducers';

const rootReducer = combineReducers({ score: scoreReducers });

export default rootReducer;
