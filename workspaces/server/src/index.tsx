import React from 'react';
import express from 'express';
import { render } from './render';
import { renderToString } from 'react-dom/server';
// import Routes from '../../client/src/Routes';
import { Home } from '../../client/src/components/Home';

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (_req, res) => {
  const content = renderToString(<Home />);
  // const content = renderToString(<Routes />);
  res.write(render(content));
  res.end();
});

app.listen(3000, () => console.log('app listening on 3000'));
