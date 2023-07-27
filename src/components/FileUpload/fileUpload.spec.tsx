import React from 'react';
import { shallow } from 'enzyme';
import { FileUpload } from '@/components/FileUpload';
import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button';

describe('FileUpload', () => {
  it('renders component properly when name file is not given', () => {
    const mockCallBack = jest.fn();
    const fileUpload = shallow(
      <FileUpload
        id="text_file"
        title="Upload a text file"
        accept="text/.txt"
        description="Supported format is .txt"
        onChange={mockCallBack}
        isLoading={false}
      />,
    );
    fileUpload.containsMatchingElement(
      <p className="mx-auto w-40 rounded-3xl bg-white p-0.5 text-blue-700">Upload a text file</p>,
    );
    fileUpload.containsMatchingElement(
      <input
        id="text_file"
        data-testid="text_file"
        name="text_file"
        type="file"
        className="sr-only"
        accept="text/.txt"
        multiple={false}
        onChange={mockCallBack}
      />,
    );
  });
  it('renders component properly when name file is given', () => {
    const mockCallBack = jest.fn();
    const fileUpload = shallow(
      <FileUpload
        id="text_file"
        title="Upload a text file"
        accept="text/.txt"
        description="Supported format is .txt"
        onChange={mockCallBack}
        isLoading={false}
        fileName="sample"
      />,
    );
    fileUpload.containsMatchingElement(<CheckIcon className="mx-auto h-10 w-10 text-green-600" />);
    fileUpload.containsMatchingElement(<Button onClick={mockCallBack}>Remove file</Button>);
  });
  it('displays loading icon', () => {
    const mockCallBack = jest.fn();
    const fileUpload = shallow(
      <FileUpload
        id="text_file"
        title="Upload a text file"
        accept="text/.txt"
        description="Supported format is .txt"
        onChange={mockCallBack}
        fileName="test"
        isLoading={true}
      />,
    );
    fileUpload.contains(`<Loading additionalClasses="mt-7" />`);
  });
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const fileUpload = shallow(
      <FileUpload
        id="text_file"
        title="Upload a text file"
        accept="text/.txt"
        description="Supported format is .txt"
        onChange={mockCallBack}
        isLoading={false}
      />,
    );
    fileUpload.find('input').simulate('change', { preventDefault() {} });
    expect(mockCallBack.mock.calls).toBeCalled;
  });
});
