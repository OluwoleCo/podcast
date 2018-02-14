import React from 'react';
import episodeData from '../../data/episodeData';

let styles = {
  number: {
    fontSize: 22,
    textAlign: 'left'
   
  },
  title:{
    fontSize: 21,
    color: '#000000'

  },

  notes: {
    textAlign: 'center',

    },

    guest: {
      textTransform: 'uppercase',
      marginTop: '-10px',
      textAlign: 'left'     

    },

    frame: {
      // textAlign: 'center',
      // width: '50%',
      maxWidth: 500,
      marginLeft: 'auto',
      marginRight : 'auto',
      textAlign: 'center'
    }
  }

const Kelechi = ({ location }) => {
  const episode = episodeData.find(p => p.slug === 'kelechi') 
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div style={styles.frame}>
          <img
              src={episode.image}
            style={{ height: 370.33}}
          />

          <p style={styles.number}>Episode {episode.number} - {episode.title} </p>
          <small><p style={styles.guest}>with {episode.guest}</p></small>
          {/* {episode.audioUrl} */}
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271620073&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>
          </div>

        </div>
        
        <div style={{ backgroundColor: '#fff', height: 370.33}}className="col-lg-6 col-md-6 col-sm-12">
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
