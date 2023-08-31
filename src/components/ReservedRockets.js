import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const ReservedRockets = ({ reservedRockets }) => (
  <div className="container">
    {reservedRockets.length === 0 ? (
      <p style={{ color: 'red' }}>No Reserved Rockets</p>
    ) : (
      <ListGroup className="shadow p-3 mb-5 bg-body-tertiary rounded">
        {reservedRockets.map((rocket) => (
          <ListGroup.Item key={rocket.rocket_id}>
            {rocket.rocket_name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )}
  </div>
);

ReservedRockets.propTypes = {
  reservedRockets: PropTypes.arrayOf(
    PropTypes.shape({
      rocket_id: PropTypes.string.isRequired,
      rocket_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReservedRockets;
