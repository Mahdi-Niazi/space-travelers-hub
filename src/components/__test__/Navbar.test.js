import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../NavLink';
import store from '../../redux/store';

describe('Test the Mission file', () => {
  it('should match to snapshoot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should return the number of navlinks', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    );
    const navlinks = screen.getAllByRole('link');
    expect(navlinks).toHaveLength(4);
  });
});
