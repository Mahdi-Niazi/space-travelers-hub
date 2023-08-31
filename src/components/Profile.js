import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import JoinedMission from './JoinedMission';
import ReservedRockets from './ReservedRockets';

const Profile = () => {
  const { allMissions, allRockets } = useSelector((store) => ({
    allMissions: store.missions.allMissions,
    allRockets: store.rockets.allRockets,
  }));

  const joinedMissions = allMissions.filter((mission) => mission.joined);
  const reservedRockets = allRockets.filter((rocket) => rocket.reserved);

  return (
    <div className="d-flex container pt-5 ml-3">
      <div className="w-50">
        <h2 data-testid="h2Id">My Missions</h2>
        <JoinedMission joinedMissions={joinedMissions} />
      </div>
      <div className="w-50">
        <h2>My Reserved Rockets</h2>
        <ReservedRockets reservedRockets={reservedRockets} />
      </div>
    </div>
  );
};
export default Profile;
