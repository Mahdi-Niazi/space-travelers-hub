import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const JoinedMission = ({ joinedMission }) => (
  <div>
    {joinedMission.length === 0 ? (
      <p style={{ color: 'red' }} data-testid="pId">No Joined Rockets</p>
    ) : (
      <ListGroup className="shadow p-3 mb-5 bg-body-tertiary rounded">
        {joinedMission.map((items) => (
          <ListGroup.Item key={items.mission_id}>
            {items.mission_name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}
  </div>
);
JoinedMission.propTypes = {
  joinedMission: PropTypes.instanceOf(Array).isRequired,
};

export default JoinedMission;
