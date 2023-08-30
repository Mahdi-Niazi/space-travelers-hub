import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/slices/MissionsSlice';

const MissionList = ({
  id, missions, descriptions, joined,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td className="titles">{missions}</td>
        <td>{descriptions}</td>
        <td className="memberBtn">
          {joined ? <span className="activeStyle">Active Member</span> : <span className="nonactiveStyle">NOT A MEMBER</span>}
        </td>
        <td className="memberBtn">
          <button
            type="button"
            className="joinMission"
            onClick={() => dispatch(joinMission(id))}
          >
            Join Mission
          </button>
        </td>
      </tr>
    </>
  );
};

MissionList.propTypes = {
  id: PropTypes.string.isRequired,
  missions: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MissionList;
