import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader'

import Bar from '../../dist';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>react-meter-bar</h1>
        <h2>example 1</h2>
        <Bar
          labels={[0,10,20,30,40,50,60,70,80,90,100]}
          labelColor="steelblue"
          progress={80}
          barColor="#fff34b"
          seperatorColor="hotpink"
        />
        <h2>example 2</h2>
        <Bar
          labels={["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"]}
          labelColor="steelblue"
          progress={85}
          barColor="#FF0303"
          seperatorColor="#fff"
        />
      </div>
    );
  }
}

const HotApp = hot(module)(App);

ReactDOM.render(
	<HotApp />,
	document.getElementById('root')
)

