import Typography from "typography"
import stowLakeTheme from "typography-theme-stow-lake"

const typography = new Typography(stowLakeTheme);

stowLakeTheme.overrideThemeStyles = () => {
  return {
    "p > img": {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }
};

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale