import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import JoinedMission from './JoinedMission';

const Profile = () => {
  const { allMissions } = useSelector((store) => store.missions);
  const joinedMissions = allMissions.filter((mission) => mission.joined);
  return (
    <div className="d-flex container pt-5">
      <div className="w-50">
        <h2 data-testid="h2Id">My Missions</h2>
        <JoinedMission joinedMissions={joinedMissions} />
      </div>
    </div>
  );
};
export default Profile;
