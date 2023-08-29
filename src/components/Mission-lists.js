import React from 'react';
import PropTypes from 'prop-types';

const MissionList = ({ missions, descriptions }) => (
  <>
    <tr>
      <td>{missions}</td>
      <td>{descriptions}</td>
    </tr>
  </>
);

MissionList.propTypes = {
  missions: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
};

export default MissionList;
