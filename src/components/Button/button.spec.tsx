import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@/components/Button';

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
    button
      .find('button')
      .hasClass(
        'relative flex items-center justify-center rounded-md px-4 py-2 font-medium text-blue-900 border-2 border-blue-900',
      );
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Display Loading icon when has prop loading', () => {
    const mockCallBack = jest.fn();

    const button = shallow(
      <Button onClick={mockCallBack} isLoading>
        Ok!
      </Button>,
    );
    button
      .find('button')
      .hasClass(
        'relative flex items-center justify-center rounded-md px-4 py-2 font-medium text-blue-900 border-2 border-blue-900 opacity-50 pointer-events-none',
      );
    button.find('button').is('disabled');
    button.find('button').contains('svg');
  });
});
