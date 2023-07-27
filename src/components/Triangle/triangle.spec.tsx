import React from 'react';
import { shallow } from 'enzyme';

import { Triangle } from '@/components/Triangle';

describe('Triangle', () => {
  it('renders component properly', () => {
    const arrValues = [
      [{ value: 20, isMax: true }],
      [{ value: 10 }, { value: 10, isMax: true }],
      [{ value: 15 }, { value: 55, isMax: true }, { value: 10 }],
    ];
    const triangleComp = shallow(<Triangle arrValues={arrValues} />);
    triangleComp.exists;
  });
});
