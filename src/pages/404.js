import React from 'react';
import Link from 'gatsby-link';


// import gifSrc from './img/rage-quit.gif';

const FourOhFour = ({ location }) => (
      <div>
        <h1>Oops.</h1>
        <p>Page not found at the this time. Did you want to view <Link to="/">All the Episodes?</Link>?</p>
      </div>
      // <img src={gifSrc} alt="Rage quit" />
)

export default FourOhFour;
