import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '../CircularProgress';
import { useResourceStatus } from '../../utils/hooks';

const ProgressCircle = ({ course, instructor }) => {
    const resourcesDoneByTopic = useResourceStatus(!instructor, course._id);
    const resourcesDone = [];
    Object.values(resourcesDoneByTopic).forEach(res => {
        resourcesDone.push(...res);
    });
    const totalResources = course.topics.reduce((tot, top) => tot + top.coreResources.length, 0);
    const progress = (resourcesDone.length / totalResources) * 100;
    return (
        <div className='topbar__right'>
            Your progress
            <CircularProgress size='50' progress={progress} />
        </div>
    );
};

ProgressCircle.propTypes = {
    course: PropTypes.object.isRequired,
    instructor: PropTypes.bool.isRequired
};

export default ProgressCircle;