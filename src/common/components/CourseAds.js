import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourseAds } from '../actions';

class CourseAds extends Component {
  static loadData = store => store.dispatch(fetchCourseAds());

  componentDidMount() {
    this.props.fetchCourseAds;
  }

  render() {
    const { courseAds } = this.props;

    return (
      <div>
        {courseAds.map(courseAd => (
          <div>
            <div>{courseAd._id}</div>
            <div>{courseAd.title}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courseAds: state.courseAds,
});

export default connect(
  mapStateToProps,
  { fetchCourseAds }
)(CourseAds);
