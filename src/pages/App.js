import React from 'react';
import "./css/App.css"
// import Names from "./Names.js"
import { uuid } from 'uuidv4';

class App extends React.Component {
  // state = {
  //   user: []
  // }

  state = {
    name: null,
    id: null,
  }
  // handleForm = (e) => {
  //   e.preventDefault();
  //   this.state.user.push({
  //     name: e.target[0].value,
  //     id: new Date().getTime()
  //   })
    
  //   console.log(this.state)
  // }

  handleChange = (e) => {

    // console.log(e.target.value)
    this.setState({
      name: e.target.value,
      id: uuid()
    })
  }

  handleForm = (e) => {
    e.preventDefault();

    // const { value } = e.target[0];
    // this.setState((prevState) => ({
    //   user: prevState.user.concat({
    //     name: value,
    //     id: new Date().getTime(),
    //   }),
    // }));

    // this.setState({
    //   name: value,
    //   id: new Date().getTime()
    // })

    // console.log(this.state)

    if (this.state.name == null) {
      this.setState({
        name: null,
        id: null
      })
    } else {
      this.props.takeState(this.state) 
    }

    
  };
  
  render() {
    return (
      <div className="App flex-child">
          <h1>Hi, what's up?</h1>
          <form onSubmit={this.handleForm}>
            <div id="firstq">
            <p>What's your name?</p> <input onChange={this.handleChange} type="text"></input>
            <br />
            <button>Tell me your name</button>
            </div>
          </form>

          <br />
        {/* <Names names={this.state.user}/> */}
      </div>
    );
  }
}

export default App;
