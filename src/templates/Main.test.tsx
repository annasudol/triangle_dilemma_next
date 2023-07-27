import { render, screen, within } from '@testing-library/react';

import { AppConfig } from '@/utils/AppConfig';

import { Main } from './Main';

describe('Main template', () => {
  render(<Main meta={null}>{null}</Main>);

  describe('header', () => {
    it('should have h1 tag', () => {
      const h1 = screen.getByRole('heading', {
        name: AppConfig.title,
      });

      expect(h1).toBeInTheDocument();
    });

    it('should have a link to support github', () => {
      render(<Main meta={null}>{null}</Main>);

      const copyrightSection = screen.getByText(/© Copyright/);
      const copyrightLink = within(copyrightSection).getByRole('link');
      expect(copyrightLink).toHaveAttribute(
        'href',
        'https://github.com/annasudol',
      );
    });
  });
});
