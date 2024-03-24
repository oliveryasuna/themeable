import {css} from '@oliveryasuna/themeable-theme';
import type React from 'react';
import {CSS_PROP, TYPE_PROP} from './Themeable.props';

const createThemeableProps = ((type: React.ElementType, props: any): any => {
  if(!props || (typeof props !== 'object') || !('sx' in props)) {
    return props;
  }

  const next: Record<string, unknown> = {};

  for(const key in props) {
    if(key === 'sx') {
      continue;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    next[key] = props[key];
  }

  next[TYPE_PROP] = type;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  next[CSS_PROP] = css(props.sx);

  return next;
});

export {
  createThemeableProps
};
