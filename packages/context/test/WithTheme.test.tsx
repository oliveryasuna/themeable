import {render, screen} from '@testing-library/react';
import {ThemeProvider, WithTheme, withTheme} from '../src';
import React, {forwardRef} from 'react';
import type {DefaultTheme} from '@oliveryasuna/themeable-theme';

describe('withTheme function', ((): void => {
  test('provides theme to wrapped component', ((): void => {
    const MyComponent = ((props: any): React.ReactNode => (<div data-testid="test-id" style={{color: props.theme.colors.primary}}/>));
    const ThemedMyComponent = withTheme(MyComponent);

    render(
        <ThemeProvider theme={{colors: {primary: 'red'}}}>
          <ThemedMyComponent/>
        </ThemeProvider>
    );

    expect(screen.getByTestId('test-id')).toHaveStyle({color: 'red'});
  }));

  test('forwards ref to wrapped component', ((): void => {
    const TestComponent = forwardRef<HTMLDivElement, {theme?: any}>((_, ref) => (<div ref={ref} data-testid="test-id"/>));

    const ref = React.createRef<HTMLDivElement>();
    const WithThemeComponent = withTheme<HTMLDivElement, {theme?: any}>(TestComponent);

    render(
        <ThemeProvider theme={{}}>
          <WithThemeComponent ref={ref}/>
        </ThemeProvider>
    );

    expect(screen.getByTestId('test-id')).toBe(ref.current);
  }));
}));

describe('WithTheme component', ((): void => {
  test('provides theme to children', ((): void => {
    render(
        <ThemeProvider theme={{colors: {primary: 'red'}}}>
          <WithTheme>{(theme: DefaultTheme): React.ReactNode => (<div data-testid="test-id" style={{color: (theme.colors as any)['primary']}}/>)}</WithTheme>
        </ThemeProvider>
    );

    expect(screen.getByTestId('test-id')).toHaveStyle({color: 'red'});
  }));

}));
