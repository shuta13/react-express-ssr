import React from 'react';

// import Routes from './Routes';
import { hydrate } from 'react-dom';
import { Home } from './components/Home';

hydrate(<Home />, document.getElementById('root'));
// hydrate(<Routes />, document.getElementById('root'));
