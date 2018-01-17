import React from 'react';
import episodeData from '../data/episodeData';
import Episodes from '../components/episodes/index';

let podcastStyle = {
  container: {
    width: '100%',
    // backgroundColor: 'red'
  }
}

console.log(episodeData)
const Podcast = () => (
  <div className="container-fluid">
    <div className="row">
     <div style={podcastStyle.container}>
      {episodeData.map(episode => <Episodes episode={episode} key={episode.slug} />)}
    </div>
   </div>
  </div>
)

export default Podcast;