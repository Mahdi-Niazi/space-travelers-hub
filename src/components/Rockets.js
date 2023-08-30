import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/slices/RocketsSlice';

const Rockets = () => {
  const { allRockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  // Check whether data is being retrieved
  // eslint-disable-next-line no-console
  console.log(allRockets);

  return (
    <div>
      {/* Render rockets data here */}
    </div>
  );
};

export default Rockets;
