import React, {useContext} from 'react';
import {ThemeContext} from '@oliveryasuna/themeable-context';
import {render, screen} from '@testing-library/react';

describe('ThemeContext context', ((): void => {
  test('provides the default value', ((): void => {
    const MyComponent = ((): React.ReactNode => {
      const theme = useContext(ThemeContext);
      return (<div data-testid="theme">{JSON.stringify(theme)}</div>);
    });

    render(<MyComponent/>);

    expect(screen.getByTestId('theme')).toHaveTextContent('{}');
  }));

  test('provides a custom value through the provider', ((): void => {
    const MyComponent = ((): React.ReactNode => {
      const theme = useContext(ThemeContext);
      return (<div data-testid="theme">{JSON.stringify(theme)}</div>);
    });

    render(
        <ThemeContext.Provider value={{colors: {primary: 'red'}}}>
          <MyComponent/>
        </ThemeContext.Provider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('{"colors":{"primary":"red"}}');
  }));
}));
