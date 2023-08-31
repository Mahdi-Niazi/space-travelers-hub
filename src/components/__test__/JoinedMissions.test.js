import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import JoinedMission from '../JoinedMission';
import store from '../../redux/store';

describe('Joined Mission Component', () => {
  const joinedMissions = [];
  it('should', () => {
    render(
      <Provider store={store}>
        <JoinedMission joinedMissions={joinedMissions} />
      </Provider>,
    );
    const p = screen.getByTestId('pID');
    expect(p.innerHTML).toBe('No Joined Missions');
  });
});
