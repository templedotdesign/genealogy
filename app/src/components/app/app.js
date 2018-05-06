import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../layout/layout';
import Example from '../routes/example/example';

const app = () => {
  return (
    <BrowserRouter>
      <Layout>
        <div style={{margin: '12vh 50px 0 50px'}}>
          <Switch>
            <Route exact path='/' component={Example}/>
          </Switch>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default app;
