import { paramsForServer } from 'feathers-hooks-common';
import { CourseAdService } from '../services';

export const FETCH_COURSE_ADS = 'fetch_course_ads';

export const fetchCourseAds = q => async dispatch => {
  const query = { ...q, $limit: 100, $sort: { createdAt: -1 } };

  try {
    const res = await CourseAdService.find({ query });
    console.log('res', res);
    dispatch({
      type: FETCH_COURSE_ADS,
      payload: res.data,
    });
  } catch (err) {
    console.log('fetchCourseAds err', err);
  }
};
