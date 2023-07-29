import { renderHook } from '@testing-library/react';
import { useFileUpload } from '@/hooks/useFileUpload';

describe('useFileUpload', () => {
  test('should render the initial state', () => {
    const { result } = renderHook(useFileUpload);
    expect(result.current.error.isError).toBeFalsy;
    expect(result.current.isUploading).toBeFalsy;
    expect(result.current.maxTotal).toBe(undefined);
    expect(result.current.arrValues).toMatchObject([]);
  });
});
