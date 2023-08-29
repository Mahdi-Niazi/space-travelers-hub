import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/slices/MissionsSlice';
import MissionList from './Mission-lists';

const Missions = () => {
  const { allMissions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Descriptions</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>

          {allMissions.map((item) => (
            <MissionList
              key={item.id}
              id={item.mission_id}
              missions={item.mission_name}
              descriptions={item.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
