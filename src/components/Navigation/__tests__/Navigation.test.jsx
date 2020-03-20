import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/theme';
import Navigation, { cleanUpTOC, updateTOC } from '../Navigation';

const headingClassName = 'tocHeading';
const headings = ['foo', 'bar'];

const MockFormSections = () => {
  useEffect(() => {
    updateTOC();
    return cleanUpTOC;
  });

  return (
    <div className="tocSection">
      {headings.map(heading => (
        <div key={heading} className={headingClassName}>
          {heading}
        </div>
      ))}
    </div>
  );
};

describe('<Navigation/>', () => {
  test('renders side navigation', () => {
    render(
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    );
  });

  test('renders side navigation with table of contents', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <MockFormSections />
        <Navigation />
      </ThemeProvider>
    );

    headings.forEach(heading => {
      const allEntries = getAllByText(heading);
      const navigationEntry = allEntries.filter(entry => entry instanceof HTMLAnchorElement);
      expect(navigationEntry).toHaveLength(1);
      expect(navigationEntry[0]).toBeVisible();
    });
  });
});
