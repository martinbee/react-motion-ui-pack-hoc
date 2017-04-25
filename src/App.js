import React from 'react';
import './App.css';
import ReactMotionUiPackHoc from './ReactMotionUiPackHoc';

export default function App() {
  return (
    <div className="App">
      <h5>React-Motion-ui-pack HOC</h5>
      <ReactMotionUiPackHoc animationType="test">
        <div key="test" className="box red">
          Hello World
        </div>
      </ReactMotionUiPackHoc>
    </div>
  );
}
