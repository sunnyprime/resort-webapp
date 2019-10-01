import React from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import { Route , Switch } from 'react-router-dom';
import Navbar from './Component/Navbar';



function App() {
  return (
    <>
   
    <Navbar />
    <Switch>
    <Route exact path="/" component ={Home} />
    <Route exact path="/rooms/" component ={Rooms} />
    <Route exact path="/room/:slug" component ={SingleRoom} />
    <Route component ={Error} />
    </Switch>
    </>

  );
}

export default App;
