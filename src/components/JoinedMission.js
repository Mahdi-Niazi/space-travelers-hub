import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const JoinedMission = ({ joinedMissions }) => (
  <div className="container">
    {joinedMissions.length === 0 ? (
      <p style={{ color: 'red' }} data-testid="pID">
        No Joined Missions
      </p>
    ) : (
      <ListGroup className="shadow p-3 mb-5 bg-body-tertiary rounded">
        {joinedMissions.map((mission) => (
          <ListGroup.Item key={mission.mission_id}>
            {mission.mission_name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}
  </div>
);
JoinedMission.propTypes = {
  joinedMissions: PropTypes.instanceOf(Array).isRequired,
};

export default JoinedMission;
