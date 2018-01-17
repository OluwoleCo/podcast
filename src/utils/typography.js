
import Typography from 'typography'
// import Wordpress2016 from 'typography-theme-wordpress-2016'

// Wordpress2016.overrideThemeStyles = () => ({
//   'a.gatsby-resp-image-link': {
//     boxShadow: 'none',
//   },
// })

// const typography = new Typography(Wordpress2016)

// import bootstrapTheme from "typography-theme-bootstrap";

// const typography = new Typography(bootstrapTheme)

import zackliveTheme from 'typography-theme-zacklive'

const typography = new Typography(zackliveTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
