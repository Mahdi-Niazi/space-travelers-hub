import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../Rockets';
import store from '../../redux/store';

describe('Rockets Component', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
