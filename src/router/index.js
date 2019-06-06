import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssuesHome from '../pages/IssuesHome';
import IssueDetail from '../pages/IssueDetail';
import About from '../pages/About';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './router.css';

const AppRouter = () => (
  <Router>
    <div className='container'>
      <Header/>
      <Route path="/" exact component={IssuesHome} />
      <Route path="/about/" component={About} />
      <Route path="/detail/:issueId" component={IssueDetail} />
      <Footer/>
    </div>
  </Router>
);

export default AppRouter;
