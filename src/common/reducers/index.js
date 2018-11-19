import { combineReducers } from 'redux';

import counter from './counter';
import courseAds from './course-ads';

const rootReducer = combineReducers({
  counter,
  courseAds,
});

export default rootReducer;
