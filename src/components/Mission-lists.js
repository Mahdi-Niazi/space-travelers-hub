import React from 'react';
import PropTypes from 'prop-types';

const MissionList = ({ missions, descriptions }) => (
  <>
    <tr>
      <td className="titles">{missions}</td>
      <td>{descriptions}</td>
      <td className="memberBtn">
        <span className="statusStyle">NOT A MEMBER</span>
      </td>
      <td className="memberBtn">
        <button type="button" className="joinMission">
          Join Mission
        </button>
      </td>
    </tr>
  </>
);

MissionList.propTypes = {
  missions: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
};

export default MissionList;
