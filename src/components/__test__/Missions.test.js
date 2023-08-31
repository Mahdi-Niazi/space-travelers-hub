import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../Missions';
import store from '../../redux/store';

describe('Mission component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
