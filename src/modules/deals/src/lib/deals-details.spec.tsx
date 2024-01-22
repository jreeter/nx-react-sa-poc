import { render } from '@testing-library/react';

import DealsDetail from './deals-details';

describe('DealsDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DealsDetail />);
    expect(baseElement).toBeTruthy();
  });
});
