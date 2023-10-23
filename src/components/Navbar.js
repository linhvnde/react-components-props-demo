import React, { Component } from 'react';
import Button from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <p>React - Components & props</p>
          <Button/>
          <Button/>
        </nav>
      </div>
    );
  }
}
