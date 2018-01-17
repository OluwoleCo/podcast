import React from 'react';

 const Kelechi = ({ location }) => {
  return (
  <div>
    <div>
      <p>Episode {episode.number}</p><br/>
      <p>{episode.title}</p>
      <p>with {episode.guest}</p>
    </div>
    <div>
      {episode.audioUrl}
      {episode.shownotes}
    </div>
  </div>
  )
}

export default Kelechi;
