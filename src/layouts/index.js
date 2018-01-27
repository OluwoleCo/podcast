import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    let footer

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    let layoutStyle = {
      container: {
        textAlign: 'center',
        listStyle: 'none',
      },

      footer: {
        textAlign: 'center',
        listStyle: 'none',
        // position: 'relative',
        // marginTop: '-180px',
        // height: 180,
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
      },

      list: {
        display: 'inline-block',
        // float: 'left',
        textAlign: 'center',
        paddingLeft: '1em',
        paddingRight: '1em'
      }
    }


      header = (
        <div style={layoutStyle.container}>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 20,
              textDecoration: 'underline'
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                // textDecoration: 'none',
                color: 'inherit',
                fontSize: 55
              }}
              to={'/'}
            >
              Close Enough
            </Link>
          </h1>
          <ul style={{marginBottom: 30}} >
           <Link to={'/'}> <li style={layoutStyle.list}>Episodes</li></Link>
            <Link to='/about'><li style={layoutStyle.list}>About</li></Link>
            <li style={layoutStyle.list}>Subscribe</li>
            <li style={layoutStyle.list}>Newsletter</li>            
          </ul>
        </div>
      )

      footer = (
        <div style={layoutStyle.footer}>
          <ul>
            <li style={layoutStyle.list}>Subscribe</li>
            <li style={layoutStyle.list}>About</li>
            <li style={layoutStyle.list}>Suggest a guest</li>
            <li style={layoutStyle.list}>Twitter</li>
            <li style={layoutStyle.list}>Newsletter</li>            
          </ul>
        </div>
      )
 
    return (
      
      <div style={{ backgroundColor: '#F8F9FB' }}>
        <Container
          style={{
            maxWidth: rhythm(80),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children()}
          {footer}
        </Container>
      </div>
    )
  }
}

export default Template
