import React from 'react';
import episodeData from '../../data/episodeData';

let styles = {
  number: {
    fontSize: 34,
   
  },
  title:{
    fontSize: 25,
    color: '#000000'

  },

  notes: {
    textAlign: 'center',

    },

    guest: {
      textTransform: 'uppercase',
      marginTop: '-10px'
    },

    frame: {
      width: 32,
      height: 32
    }
  }

const Kelechi = ({ location }) => {
  const episode = episodeData.find(p => p.slug === 'kelechi') 
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
              src={episode.image}
            style={{ height: 370.33}}
          />
        </div>
        
        <div style={{ backgroundColor: '#fff', height: 370.33}}className="col-lg-6 col-md-6 col-sm-12">
          <p style={styles.number}>Episode {episode.number} </p>
          <p style={styles.title}>{episode.title}</p>
          <small><p style={styles.guest}>with {episode.guest}</p></small>
          {episode.audioUrl}
          {/* <iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fsomeofall%2Fthe-pr-maven&color=orange_transparent&size=40"></iframe> */}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p style={styles.notes}>{episode.showNotes}</p>
        </div>
      </div>
    </div>
  )
}

export default Kelechi;
