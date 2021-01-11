import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';
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
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <div className="App">
        {/* <Navbar /> */}
        <h1 className="display-1">Dog App!</h1>
        <Switch>
          <Route exact path="/dogs" render={() => 
            <DogList dogs={this.props.dogs} />} />
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    );
  }
}

export default App;
