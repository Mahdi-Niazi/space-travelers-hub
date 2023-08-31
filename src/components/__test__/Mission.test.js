import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionList from '../Mission-lists';
import store from '../../redux/store';

describe('Mission component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
