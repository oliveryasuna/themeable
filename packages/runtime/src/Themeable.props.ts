import type {css} from '@oliveryasuna/themeable-theme';
import type React from 'react';

const TYPE_PROP: string = '__type';
const CSS_PROP: string = '__css';

type ThemeableProps<Props> = (Props & {
  __type: React.ElementType<Props>,
  __css: ReturnType<typeof css>
});

export type {
  ThemeableProps
};
export {
  TYPE_PROP,
  CSS_PROP
};
