import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { getRockets } from '../redux/slices/RocketsSlice';
import './module.Rockets.css';

const Rockets = () => {
  const { isLoading, isError, allRockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const loading = isLoading && <p>Books loading, please wait!</p>;
  const error = isError && <p>Error loading books, please try again!</p>;

  return (
    <div>
      <div className="rockets-container">
        {loading}
        {error}
        {allRockets.map((rocket) => (
          <Card key={rocket.id} className="rocket-card">
            <Card.Img variant="top" src={rocket.flickr_images[0]} className="card-image" />
            <Card.Body>
              <Card.Title className="title">{rocket.rocket_name}</Card.Title>
              <Card.Text>{rocket.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Rockets;
