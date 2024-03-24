<!-- @formatter:off -->
# Themeable

Simplified theme management for your React applications.

## Installation

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

[//]: # (TODO: Add guide.)

### API

#### `ThemeProvider`

The `ThemeProvider` component is used to provide a theme to your application.
It should be used at the root of your application.

```javascript
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

#### `WithTheme`

The `WithTheme` component is used for contextual access to the theme in your
components.

```javascript
import {WithTheme} from '@oliveryasuna/themeable';

const Heading = () => (
  <WithTheme>
    {theme => (
      <h1 style={{color: theme.colors.primary}}>Hello, World!</h1>
    )}
  </WithTheme>
);
```

#### `useTheme`

The `useTheme` hook is used for hook-based access to the theme in your
components.

```javascript
import { useTheme } from '@oliveryasuna/themeable';

const Heading = () => {
  const theme = useTheme();

  return (
    <h1 style={{ color: theme.colors.primary }}>Hello, World!</h1>
  );
};
```

#### `sx`

The `sx` prop is used to apply styles to your components.

You are probably familiar with this pattern if you have used libraries like
[Emotion](https://github.com/emotion-js/emotion).
However, unlike Emotion, no `sx` properties map to specific theme properties.
Rather, you can use the `$` prefix to reference theme properties as they are
defined in your theme.

```javascript
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

* Inspired by [Theme UI](https://theme-ui.com/) and [Emotion](https://emotion.sh/).
