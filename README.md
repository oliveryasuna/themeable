<!-- @formatter:off -->
# Themeable

Simplified theme management for your React applications.

## Installation

**NOT YET PUBLISHED!**

```shell
npm install @oliveryasuna/themeable
```

## Example

```javascript
/** @jsxImportSource @oliveryasuna/themeable */
import {ThemeProvider} from '@oliveryasuna/themeable';

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
  }
};

const App = () => (
  <ThemeProvider theme={theme}>
    <h1 sx={{
      fontFamily: '$fonts.heading',
      color: '$colors.primary'
    }}>
      Hello, World!
    </h1>
  </ThemeProvider>
);
```

## Guide

[//]: # (TODO: Anything else to guide?)

### TypeScript

The default theme object is of type `DefaultTheme`:

```typescript
type DefaultTheme = {
  borders?: Scale<CSS.Property.Border<NonNullable<unknown>>>,
  borderStyles?: Scale<CSS.Property.Border<NonNullable<unknown>>>,
  borderWidths?: Scale<CSS.Property.BorderWidth<TLength>>,
  borderRadii?: Scale<CSS.Property.BorderRadius<TLength>>,
  colors?: Scale<CSS.Property.Color>,
  fonts?: Scale<CSS.Property.FontFamily>,
  fontSizes?: Scale<CSS.Property.FontSize<TLength>>,
  fontWeights?: Scale<CSS.Property.FontWeight>,
  letterSpacings?: Scale<CSS.Property.LetterSpacing<TLength>>,
  lineHeights?: Scale<CSS.Property.LineHeight<TLength>>,
  shadows?: Scale<CSS.Property.BoxShadow>,
  sizes?: Scale<CSS.Property.Width<NonNullable<unknown>> | CSS.Property.Height<NonNullable<unknown>>>,
  space?: Scale<CSS.Property.Margin<NonNullable<unknown>>>,
  zIndices?: Scale<CSS.Property.ZIndex>
};
```

### Controlling the Theme Type

Unlike similar libraries, you have complete control over the type of
your theme object.

```typescript jsx
type MyTheme = {
  colors: {
    primary: string,
    secondary: string
  };
};

const App = () => (
  <ThemeProvider<MyTheme> theme={{
    colors: {
      primary: 'hotpink',
      secondary: 'rebeccapurple',
    },
  }}>
    <Root/>
  </ThemeProvider>
);

const Root = () => {
  const theme = useTheme<MyTheme>();

  return (
    <h1 style={{color: theme.colors.primary}}>Hello, World!</h1>
  );
};
```

`WithTheme` also supports this pattern:

```typescript jsx
const Heading = () => (
  <WithTheme<MyTheme>
    {theme => (
      <h1 style={{color: theme.colors.primary}}>Hello, World!</h1>
    )}
  />
);
```

## API

### `ThemeProvider`

The `ThemeProvider` component is used to provide a theme to your application.
It should be used at the root of your application.

```jsx
import {ThemeProvider} from '@oliveryasuna/themeable';

const theme = {
  colors: {
    primary: 'hotpink',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <h1 sx={{color: '$colors.primary' }}>Hello, World!</h1>
  </ThemeProvider>
);
```

### `WithTheme`

The `WithTheme` component is used for contextual access to the theme in your
components.

```jsx
import {WithTheme} from '@oliveryasuna/themeable';

const Heading = () => (
  <WithTheme>
    {theme => (
      <h1 style={{color: theme.colors.primary}}>Hello, World!</h1>
    )}
  </WithTheme>
);
```

### `useTheme`

The `useTheme` hook is used for hook-based access to the theme in your
components.

```jsx
import { useTheme } from '@oliveryasuna/themeable';

const Heading = () => {
  const theme = useTheme();

  return (
    <h1 style={{ color: theme.colors.primary }}>Hello, World!</h1>
  );
};
```

### `sx`

The `sx` prop is used to apply styles to your components.

You are probably familiar with this pattern if you have used libraries like
[Emotion](https://github.com/emotion-js/emotion).
However, unlike Emotion, no `sx` properties map to specific theme properties.
Rather, you can use the `$` prefix to reference theme properties as they are
defined in your theme.

```jsx
import { ThemeProvider } from '@oliveryasuna/themeable';

const theme = {
  colors: {
    primary: 'hotpink',
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <h1 sx={{color: '$colors.primary'}}>Hello, World!</h1>
  </ThemeProvider>
);
```

The `sx` prop supports the following aliases:


| Alias  | Properties                    |
|--------|-------------------------------|
| `m`    | `margin`                      |
| `mt`   | `marginTop`                   |
| `mr`   | `marginRight`                 |
| `mb`   | `marginBottom`                |
| `ml`   | `marginLeft`                  |
| `mx`   | `marginLeft`, `marginRight`   |
| `my`   | `marginTop`, `marginBottom`   |
| `p`    | `padding`                     |
| `pt`   | `paddingTop`                  |
| `pr`   | `paddingRight`                |
| `pb`   | `paddingBottom`               |
| `pl`   | `paddingLeft`                 |
| `px`   | `paddingLeft`, `paddingRight` |
| `py`   | `paddingTop`, `paddingBottom` |
| `size` | `width`, `height`             |
| `fg`   | `color`                       |
| `bg`   | `backgroundColor`             |

## Development

| Module       | Description                       |
|--------------|-----------------------------------|
| context      | Theme context and related hooks.  |
| css          | CSS types and utilities.          |
| runtime      | JSX pragma and related utilities. |
| theme        | Theme types and utilities.        |
| utils        | Miscellaneous utilities.          |

[//]: # (TODO: Add more details.)

# Acknowledgements

* Inspired by [Theme UI](https://theme-ui.com/) and [Emotion](https://emotion.sh/). Some code used.
