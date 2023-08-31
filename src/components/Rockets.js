import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/module.Rockets.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
import { getRockets, setReserved, cancelReserved } from '../redux/slices/RocketsSlice';

const Rockets = () => {
  const { isLoading, isError, allRockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  const handleReserve = (rocketId) => {
    dispatch(setReserved(rocketId));
  };

  const handleCancel = (rocketId) => {
    dispatch(cancelReserved(rocketId));
  };

  useEffect(() => {
    if (!allRockets.length) dispatch(getRockets());
  }, [dispatch, allRockets]);

  const loading = isLoading && <p>Rockets loading, please wait!</p>;
  const error = isError && <p>Error loading rockets, please try again!</p>;

  return (
    <div>
      <div className="rockets-container">
        {loading}
        {error}
        {allRockets.map((rocket) => (
          <Card key={rocket.id} className="rocket-card">
            <Card.Img variant="top" src={rocket.flickr_images[0]} className="card-image" />
            <Card.Body>
              <Card.Title className="title">
                {rocket.reserved && <Badge variant="success">Reserved</Badge>}
                {' '}
                {rocket.rocket_name}
              </Card.Title>
              <Card.Text>{rocket.description}</Card.Text>
              <Button
                className={`mt-4 py-2 px-4 ${rocket.reserved ? 'reserved' : ''}`}
                variant={rocket.reserved ? 'danger' : 'primary'}
                onClick={() => (
                  rocket.reserved ? handleCancel(rocket.id) : handleReserve(rocket.id))}
                disabled={isLoading}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve'}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
