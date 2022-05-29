import React, { Component } from 'react';
import style from "../func/form.module.css";

export class Classes extends Component {
  state = {
    name: 'gb',
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    //this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <div>this form - CLASS</div>
        <p className={style.background}>Счетчик через класс: {this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
        <p>Name: {this.state.name}</p>
        <input type="text" onChange={this.handleChange} value={this.state.name}/>
      </>
    );
  }
}