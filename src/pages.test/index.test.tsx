import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

describe('Index page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<Index />);
      const heading = screen.getByRole('heading', {
        name: /Triangle problem/,
      });
      expect(heading).toBeInTheDocument();
    });
    it('should have input', () => {
      render(<Index />);
      const input = screen.getByTestId('text_file');
      expect(input).toBeInTheDocument();
    });
  });
});
