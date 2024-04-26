import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import APPSC from './components/pages/APPSC';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TSPSC from './components/pages/TSPSC';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Subscribe from './components/pages/Subscribe';
import Group2 from './components/pages/Group2';
import Group3 from './components/pages/Group3';
import Group4 from './components/pages/Group4';
import DSC from './components/pages/DSC';
import Sachivalayam from './components/pages/Sachivalayam';
import SIConstables from './components/pages/SIConstables';
function App() {
  return (
    <Router>
      
      <Navbar />
      <Switch>
        <Route path='/APPSC' component={APPSC} />
        <Route path='/TSPSC' component={TSPSC} />
        <Route path='/Subscribe' component={Subscribe} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/group2' component={Group2} />
        <Route path='/group3' component={Group3} />
        <Route path='/group4' component={Group4} />
        <Route path='/dsc' component={DSC} />
        <Route path='/sachivalayam' component={Sachivalayam} />
        <Route path='/sIconstables' component={SIConstables} />
        <Route path='/' component={Home} />
        </Switch>
    </Router>
    
  );
}

export default App;