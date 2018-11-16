import { paramsForServer } from 'feathers-hooks-common';
import { CourseAdService } from '../services';

export const SET_COUNTER = 'SET_COUNTER';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const FETCH_COURSE_ADS = 'FETCH_COURSE_ADS';

export const getCourseAds = q => async dispatch => {
  const query = { $limit: 100, $sort: { createdAt: -1 }, ...q };

  try {
    const res = await CourseAdService.find({ query });
    console.log('res', res);
    dispatch({ type: FETCH_COURSE_ADS, payload: res.data });
  } catch (err) {
    console.log('getCourseAds err', err);
  }
};

export const set = value => ({
  type: SET_COUNTER,
  payload: value,
});

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});

export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch(increment());
};

export const incrementAsync = (delay = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};
