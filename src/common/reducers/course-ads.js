import { FETCH_COURSE_ADS } from '../actions';

const courseAds = (state = [], action) => {
  switch (action.type) {
    case FETCH_COURSE_ADS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default courseAds;
