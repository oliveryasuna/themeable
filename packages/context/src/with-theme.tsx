import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {useTheme} from './use-theme';
import type {DefaultTheme} from '@oliveryasuna/themeable-theme';

const withTheme = (<T, Props extends NonNullable<unknown>>(
    Component: React.ComponentType<Props>
): (React.ForwardRefExoticComponent<React.PropsWithoutRef<Omit<Props, 'theme'>> & React.RefAttributes<T>>) => {
  const render = ((props: Omit<Props, 'theme'>, ref: React.Ref<T>): React.ReactNode => {
    const theme = useTheme();

    return (<Component ref={ref} theme={theme} {...props as Props}/>);
  });

  const WithTheme = React.forwardRef<T, Omit<Props, 'theme'>>(render);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  WithTheme.displayName = `WithTheme(${Component.displayName ?? Component.name ?? 'Component'})`;

  return hoistNonReactStatics(WithTheme, Component);
});
// const withTheme = (<Props extends NonNullable<unknown>>(
//     Component: React.ComponentType<Props>
// ): React.ComponentType<Omit<Props, 'theme'>> => {
//   const WithTheme = React.memo<Omit<Props, 'theme'>>((props: Omit<Props, 'theme'>): React.ReactNode => (<Component {...props as Props} theme={useTheme()}/>));
//
//   // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
//   WithTheme.displayName = `WithTheme(${Component.displayName ?? Component.name ?? 'Component'})`;
//
//   return WithTheme;
// });

const WithTheme = (<TTheme extends Record<string, any> = DefaultTheme>({children}: {children: ((theme: TTheme) => React.ReactNode)}): React.ReactNode =>
    children(useTheme()));

export {
  withTheme,
  WithTheme
};
