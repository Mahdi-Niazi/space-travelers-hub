import React from 'react';
import { render } from '@testing-library/react';
import ReservedRockets from '../ReservedRockets';

describe('ReservedRockets Component', () => {
  it('should match the snapshot with no reserved rockets', () => {
    const reservedRockets = [];

    const { container } = render(
      <ReservedRockets reservedRockets={reservedRockets} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match the snapshot with reserved rockets', () => {
    const reservedRockets = [
      { rocket_id: '1', rocket_name: 'Rocket 1' },
      { rocket_id: '2', rocket_name: 'Rocket 2' },
      // Add more rockets if needed
    ];

    const { container } = render(
      <ReservedRockets reservedRockets={reservedRockets} />,
    );

    expect(container).toMatchSnapshot();
  });
});
