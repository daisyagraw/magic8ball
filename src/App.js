import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {text: "", rand:""}
  }

  componentWillMount(){
    const min = 1;
    const max = 3;
    const rand = min + Math.random() * (max - min);
    console.log(rand)
    if (rand < 1.5){
      this.setState({text: "Not at all", rand:rand})
    }
    else if (rand > 1.5 && rand < 2){
      this.setState({text:"There is a slight possibility", rand:rand})
    }
    else if (rand > 2 && rand < 2.5){
      this.setState({text:"Signs point to yes", rand:rand})
    }
    else if (rand > 2.5){
      this.setState({text: "Definitely.", rand:rand})
    }
  }

  render() {
    return (
      <div class="App main-text">
        <label class = "title" >The Magic 8-Ball says: </label> <br/>
          {this.state.text}
      </div>
    );
  }
}

export default App;
