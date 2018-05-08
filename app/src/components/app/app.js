//Core
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Layout from '../layout/layout';

//Routes
import Admin from '../routes/admin/admin';
import AdoptABook from '../routes/adoptABook/adoptABook';
import Center from '../routes/center/center';
import Home from '../routes/home/home';
import Links from '../routes/links/links';
import MemberPages from '../routes/memberPages/memberPages';
import Military from '../routes/military/military';
import Officers from '../routes/officers/officers';
import PioneerAssociation from '../routes/pioneerAssociation/pioneerAssociation';
import PioneerFamilies from '../routes/pioneerFamilies/pioneerFamilies';
import Publications from '../routes/publications/publications';
import Queries from '../routes/queries/queries';
import ResearchAids from '../routes/researchAids/researchAids';
import Reunions from '../routes/reunions/reunions';
import Volunteers from '../routes/volunteers/volunteers';

const app = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Home}/>  
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/adopt-a-book' component={AdoptABook}/>
        <Route exact path='/center' component={Center}/>
        <Route exact path='/links' component={Links}/>
        <Route exact path='/member-pages' component={MemberPages}/>
        <Route exact path='/military' component={Military}/>
        <Route exact path='/officers' component={Officers}/>
        <Route exact path='/pioneer-association' component={PioneerAssociation}/>
        <Route exact path='/pioneer-families' component={PioneerFamilies}/>
        <Route exact path='/publications' component={Publications}/>
        <Route exact path='/queries' component={Queries}/>
        <Route exact path='/research-aids' component={ResearchAids}/>
        <Route exact path='/reunions' component={Reunions}/> 
        <Route exact path='/volunteers' component={Volunteers}/>                  
      </Layout>
    </BrowserRouter>
  )
}

export default app;