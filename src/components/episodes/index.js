import React from 'react';
import Link from 'gatsby-link';

let episodesStyle = {
  container: {
    height: 300, 
    width: 350,
    boxShadow: '0 2px 6px 0 rgba(0,0,1,.08)',
    borderRadius: 3,
    cursor: 'pointer',
    marginBottom: 20,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  number: {
    fontSize: 30,
    marginTop: '-20px'
  },
  title: {
    fontSize: 15,
    marginTop: '-10px'
  },
  image: {
    height: '100%',
    width: '100%',
    boxShadow: '0 2px 6px 0 rgba(0,0,1,.08)',    
    // marginTop: 20,
  },
  textContainer: {
    height: '20%',
    marginBottom: 30
  }
}

const Episodes = ({ episode }) => (
  <Link
    to={`/${episode.slug}`}
  >
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div style={episodesStyle.container}>
            <img 
            style={episodesStyle.image}
            src={episode.image}
            alt={episode.guest}
            />
          </div>
            <div style={episodesStyle.textContainer}>
              <p style={episodesStyle.number}>Episode {episode.number}</p>
              <p style={episodesStyle.title}>{episode.title}</p>
          </div>
    </div>
  </Link>
)

export default Episodes;