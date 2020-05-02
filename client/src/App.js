//style
import './styles/baseStyle.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import React from 'react';
import Header from './components/base/Header'
import Footer from './components/base/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/pages/Landing'
import About from './components/pages/About'
import Hire from './components/pages/Hire'
import ClientPortal from './components/pages/ClientPortal'
import Portfolio from './components/pages/Portfolio'


function App() {
  return (
    <div className="App">
      <Router>
         <Header />
            <Switch>
              <Route path="/" exact component={Landing}/>
              <Route path="/about" exact component={About}/>
              <Route path="/hire" exact component={Hire}/>
              <Route path="/portal" exact component={ClientPortal}/>
              <Route path="/portfolio" exact component={Portfolio}/>
            </Switch>
         <Footer />
      </Router>
    </div>
  );
}

export default App;
