import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from './components/Main';
import Button from './components/Button';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Button color="danger">
        <img src="http://placehold.it/"></img>
        <span>Sign Up</span>
      </Button>
      <Button ghost={true} color="success">
        <img src="http://placehold.it/"></img>
        <span>Sign Up</span>
      </Button>
      <Button ghost={true} color="primary">
        <img src="http://placehold.it/"></img>
        <span>Sign Up</span>
      </Button>
      <div className='container'>
        <Counter />
      </div>
      <div className='row'>
        <div className='col'>

        </div>
      </div>
    </div>
  );
}

export default App;
