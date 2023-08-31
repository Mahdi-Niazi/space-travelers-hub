import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/slices/MissionsSlice';
import MissionList from './Mission-lists';
import './Styles/module.Missions.css';

const Missions = () => {
  const { allMissions } = useSelector((store) => store.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allMissions.length) dispatch(getMissions());
  }, [dispatch, allMissions]);

  return (
    <div className="table-container">
      <table className="mission-table">
        <thead>
          <tr>
            <th>Missions</th>
            <th>Descriptions</th>
            <th className="status">Status</th>
            <th className="status">Action</th>
          </tr>
        </thead>
        <tbody>
          {allMissions.map((item) => (
            <MissionList
              key={item.id}
              id={item.mission_id}
              missions={item.mission_name}
              descriptions={item.description}
              joined={item.joined}
              leave={item.joined}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
