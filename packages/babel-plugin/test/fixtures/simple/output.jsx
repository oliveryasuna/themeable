import { css } from "@oliveryasuna/themeable-theme";
import { useTheme } from "@oliveryasuna/themeable-context";
const MyComponent = () => (
  <div
    style={css({
      color: "$color.primary",
    })(useTheme())}
  />
);
