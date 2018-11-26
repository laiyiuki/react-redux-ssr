// import CourseAds from './common/components/CourseAds';
import CourseAds from './common/pages/CourseAds';

const routes = [
  {
    name: 'CourseAds',
    path: '/course-ads',
    component: CourseAds,
    exact: true,
    loadData: CourseAds.loadData,
  },
];

export default routes;
