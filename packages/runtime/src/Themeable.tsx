import type {ThemeableProps} from './Themeable.props';
import {CSS_PROP, TYPE_PROP} from './Themeable.props';
import React, {forwardRef} from 'react';
import {useTheme} from '@oliveryasuna/themeable-context';
import deepmerge from 'deepmerge';

const buildNewProps = ((props: ThemeableProps<any>, ref: React.ForwardedRef<unknown>): Record<string, unknown> => {
  const newProps: Record<string, unknown> = {};

  for(const key in props) {
    if((key === TYPE_PROP) || (key === CSS_PROP) || (key === 'style')) {
      continue;
    }

    newProps[key] = props[key];
  }

  newProps['ref'] = ref;

  return newProps;
});

const Themeable = forwardRef((props: ThemeableProps<any>, ref: React.ForwardedRef<unknown>): React.ReactNode => {
  const theme = useTheme();

  const WrappedComponent = props.__type;

  const newProps: Record<string, unknown> = buildNewProps(props, ref);

  return (<WrappedComponent {...newProps} style={(typeof props['style'] === 'object') ? deepmerge(props['style'], props.__css(theme)) : props.__css(theme)}/>);
});

export {
  buildNewProps,
  Themeable
};
