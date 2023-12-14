import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from './components/Main';
import Button from './components/Button';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Button ghost={true} color="success">
        <img src="http://placehold.it/"></img>
        <span>Sign Up</span>
      </Button>
    </div>
  );
}

export default App;
