import React, { Component } from 'react';
import './App.css';
import ReactMotionUiPackHoc from './ReactMotionUiPackHoc';

const options = [
  'grow',
  'fadeIn',
  'slideRight',
  'slideLeft',
  'slideUp',
  'slideDown',
  'fadeOut'
];

export default class App extends Component {
  state = {
    animationToAdd: 'grow',
    demoArray: ['grow'],
  };

  setAnimationToAdd = event => this.setState({ animationToAdd: event.target.value });

  addToDemo = () => {
    const { animationToAdd, demoArray } = this.state;

    this.setState({ demoArray: demoArray.concat(animationToAdd)});
  };

  removeEl = (index) => {
    const demoArray = this.state.demoArray.filter((el, i) => i !== index);

    this.setState({ demoArray });
  };

  renderDemo = () => (
    this.state.demoArray.map((animationType, index) => (
      <ReactMotionUiPackHoc key={index} animationType={animationType}>
        <div key={index} className='box red'>
          <div className='label'>
            {animationType}
            <div onClick={() => this.removeEl(index)}>
              X Remove
            </div>
          </div>
        </div>
      </ReactMotionUiPackHoc>
    ))
  );

  render() {
    return (
      <div className="App">
        <h5>React-Motion-ui-pack HOC</h5>
        <select onChange={this.setAnimationToAdd}>
          {options.map(optionValue => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
        </select>
        <br/>
        <button type="submit" onClick={this.addToDemo}>
          + Add to demo
        </button>
        <div className='demo-wrapper'>
          {this.renderDemo()}
        </div>
      </div>
    );
  }
}
