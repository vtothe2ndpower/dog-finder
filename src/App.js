import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import julius from './img/julius.JPG';
import romeo from './img/romeo.JPG';
import felix from './img/felix.JPG';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Julius",
        age: 1,
        src: julius,
        facts: [
          "Julius loves eating candy corn.",
          "Julius is a good dog - but stubborn.",
          "Julius sheds hella hair."
        ]
      },
      {
        name: "Romeo",
        age: 4,
        src: romeo,
        facts: [
          "Romeo is not the brightest dog.",
          "Romeo enjoys bathing.",
          "Romeo loves eating food.. plants too."
        ]
      },
      {
        name: "Felix",
        age: 4,
        src: felix,
        facts: [
          "Felix is a savage.",
          "Felix does not like getting picked up.",
          "Felix loves eating treats."
        ]
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
