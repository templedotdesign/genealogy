//Core
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Layout from '../layout/layout';

//Routes
import AdoptABook from '../routes/adoptABook/adoptABook';
import Center from '../routes/center/center';
import Home from '../routes/home/home';
import Links from '../routes/links/links';
import MemberPages from '../routes/memberPages/memberPages';
import Military from '../routes/military/military';
import PioneerAssociation from '../routes/pioneerAssociation/pioneerAssociation';
import PioneerFamilies from '../routes/pioneerFamilies/pioneerFamilies';
import Publications from '../routes/publications/publications';
import Queries from '../routes/queries/queries';
import ResearchAids from '../routes/researchAids/researchAids';
import Reunions from '../routes/reunions/reunions';

const app = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/adopt-a-book' component={AdoptABook}/>
          <Route exact path='/center' component={Center}/>
          <Route exact path='/links' component={Links}/>
          <Route exact path='/member-pages' component={MemberPages}/>
          <Route exact path='/military' component={Military}/>
          <Route exact path='/pioneer-association' component={PioneerAssociation}/>
          <Route exact path='/pioneer-families' component={PioneerFamilies}/>
          <Route exact path='/publications' component={Publications}/>
          <Route exact path='/queries' component={Queries}/>
          <Route exact path='/research-aids' component={ResearchAids}/>
          <Route exact path='/reunions' component={Reunions}/> 
          <Route exact path='/' component={Home}/>                     
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default app;