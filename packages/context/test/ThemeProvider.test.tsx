import React, {useContext} from 'react';
import {createThemeContext, ThemeProvider} from '@oliveryasuna/themeable-context';
import {render, screen} from '@testing-library/react';

describe('ThemeProvider component', ((): void => {
  const ThemeContext = createThemeContext();

  const ThemeConsumerComponent = ((): React.ReactNode => {
    const theme = useContext(ThemeContext);
    return (<div data-testid="theme-consumer">{JSON.stringify(theme)}</div>);
  });

  test('provides the theme to consuming components', ((): void => {
    const theme = {colors: {primary: 'red'}};

    render(
        <ThemeProvider theme={theme}>
          <ThemeConsumerComponent/>
        </ThemeProvider>
    );

    expect(screen.getByTestId('theme-consumer')).toHaveTextContent(JSON.stringify(theme));
  }));

  test('merges themes', ((): void => {
    const theme1 = {colors: {primary: 'red'}};
    const theme2 = {colors: {secondary: 'blue'}};

    render(
        <ThemeProvider theme={theme1}>
          <ThemeProvider theme={theme2}>
            <ThemeConsumerComponent/>
          </ThemeProvider>
        </ThemeProvider>
    );

    expect(screen.getByTestId('theme-consumer')).toHaveTextContent(JSON.stringify({...theme1, ...theme2}));
  }));

  test('updates the theme when the theme prop changes', ((): void => {
    const initialTheme = {colors: {primary: 'red'}};
    const updatedTheme = {colors: {primary: 'blue'}};

    const {rerender} = render(
        <ThemeProvider theme={initialTheme}>
          <ThemeConsumerComponent/>
        </ThemeProvider>
    );

    expect(screen.getByTestId('theme-consumer')).toHaveTextContent(JSON.stringify(initialTheme));

    rerender(
        <ThemeProvider theme={updatedTheme}>
          <ThemeConsumerComponent/>
        </ThemeProvider>
    );

    expect(screen.getByTestId('theme-consumer')).toHaveTextContent(JSON.stringify(updatedTheme));
  }));
}));
