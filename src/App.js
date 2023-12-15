import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from './components/Main';
import Button from './components/Button';
import Counter from './components/Counter';
import BigCircle from './components/BigCircle';
import Hero from './components/Hero';
import MoviesContainer from './components/MoviesContainer';
import MovieCard from './components/MoviesContainer/components/MovieCard';

const App = () => {
  return (
    <div className="app-wrapper">
      {/* <Header />
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
        <div className='col d-flex text-center justify-content-center'>
          <h2>Visul Design and Web Dev</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex text-center justify-content-center'>
          <h2>From Park City, Utah</h2>
        </div>
      </div>
      <Hero /> */}
      
      <MoviesContainer />
    </div>
  );
}

export default App;
