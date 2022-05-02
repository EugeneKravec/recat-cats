
import React from 'react';
import './App.css';
import { Footer } from './Footer';

const data = {
  firstName: 'Eugene',
  position: 'Junior React developer',
  mobile: '0800500609'

}

const App = () => (
  <div className="App">
    <Footer copyright='Eugene' />
    <h1>{data.firstName}</h1>
    <h2>{data.position}</h2>
    <h2>{data.mobile}</h2>
  </div>
)

export default App;
