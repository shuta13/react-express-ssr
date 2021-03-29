import React from 'react';
import express from 'express';
import { render } from './render';
import ReactDOMServer from 'react-dom/server';
import Routes from '../../client/src/Routes';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routes />
    </StaticRouter>
  );
  res.write(render(content, Helmet.renderStatic()));
  res.end();
});

app.listen(3000, () => console.log('app listening on 3000'));
