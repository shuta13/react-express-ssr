import React from 'react';
import { Helmet } from 'react-helmet';

export const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Home - react express ssr</title>
      <meta name="description" content="This is home." />
    </Helmet>
    This is Home.
  </>
);
