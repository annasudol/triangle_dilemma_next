import React from 'react';
import { shallow } from 'enzyme';
import { FileUpload } from '@/components/FileUpload';
import { CheckIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button';
import { before } from 'node:test';

describe('FileUpload', () => {
  it('renders component properly when name file is not given', () => {
    const mockCallBack = jest.fn();
    const fileUpload = shallow(
      <FileUpload id="text_file" accept="text/.txt" description="Supported format is .txt" onChange={mockCallBack} />,
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
    fileUpload.containsMatchingElement(
      <p className="mx-auto w-40 rounded-3xl bg-white p-0.5 text-blue-700">Upload file</p>,
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
  it('add file successfully', () => {
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
    const file = new File(['test file content'], 'test.txt', {
      type: 'text/plain',
      lastModified: 1690624067252,
    });
    fileUpload.find('input').simulate('change', { target: { file: [file] } });

    fileUpload.contains(<span className="block py-2 text-sm text-white">test.txt is uploaded.</span>);
    fileUpload.contains(<Button>Remove file</Button>);
  });
  it('removes file successfully after clicking remove file', () => {
    before(() => {
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

      const file = new File(['1, 10, 20, 11, 22, 1, 33'], 'test.txt', {
        type: 'text/plain',
        lastModified: 1690624067252,
      });
      fileUpload.find('input').simulate('change', { target: { files: [file] } });
    });
  });
});
