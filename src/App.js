import React from 'react';
import Header from './Header.js'
import './App.css';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">
     <Router>
     <Header/>
    
        <Switch>
          <Route path="/search/:searchTerm">
            <Sidebar/>
            <SearchPage />
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar/>
              <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
       </Router>
     
      
    
    </div>
  );
}

export default App;
