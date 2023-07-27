import React from 'react';
import { shallow } from 'enzyme';

import { Loading } from '@/components/Loading';

describe('Loading', () => {
  it('renders component properly', () => {
    const LoadingComp = shallow(<Loading additionalClasses="mt-7" />);
    LoadingComp.containsMatchingElement(<span className="sr-only">Loading...</span>);
  });
});
