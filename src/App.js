import React, { Component } from 'react';
import './App.css';
import ReactMotionUiPackHoc from './ReactMotionUiPackHoc';

const options = ['grow', 'fadeIn', 'slideRight', 'fadeOut'];

export default class App extends Component {
  state = {
    animationToAdd: '',
    demoArray: ['grow'],
  };

  setAnimationToAd = event => this.setState({ animationToAdd: event.target.value });

  addToDemo = () => {
    const { animationToAdd, demoArray } = this.state;

    if (animationToAdd === '') return;

    this.setState({
      demoArray: demoArray.concat(animationToAdd),
      animationToAdd: '',
    });
  };

  renderDemo = () => {
    return this.state.demoArray.map((animationType, index) => {
      const color = 'red';
      const className = 'box ' + color;
      const key = animationType + ' ' + color;

      return (
        <ReactMotionUiPackHoc key={key} animationType={animationType}>
          <div key={key} className={className}>
            {animationType}
          </div>
        </ReactMotionUiPackHoc>
      )
    });
  };

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
        <button type="submit" value="+" onClick=(this.addToDemo) />
        {this.renderDemo()}
      </div>
    );
  }
}
