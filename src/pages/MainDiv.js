import React from 'react';
import App from './App';
import Names from "./Names.js"
import './css/App.css'

class MainDiv extends React.Component {
    state = {
        user: []
    }

    updateState = (state) => {
        this.setState((prevState) => ({
            user: prevState.user.concat({
                name: state.name,
                id: state.id
            })
        })) 
    }

    takeState = (states) => {
        console.log(states.id)
        console.log(this.state)

        if (!this.state.user[0]) {
            this.updateState(states)
        } else {

            let find = Boolean(this.state.user.find(obj => 
                obj.id == states.id
            ));

            if (find || states.name.trim() === "") {
                console.log('shto')
                return null;
            } else {
                this.updateState(states)
            }

            //  this.state.user.map(name => {
            //      if ()
            //      if (name.name == states.name) {
            //          console.log("YEET")
            //      } else {
            //          this.updateState(states)
            //      }
            //  })
            //  this.state.user.forEach(name => {
            //      console.log(name.name)
            //      if (name.name == states.name) {
            //          console.log("ayeee")
            //          // this.updateState(states)
            //          // return null;
            //       } else {
            //          console.log("WHOT")
            //          this.updateState(states)
            //          // this.updateState(states)
            //      }
            //  })
        }
        /*
        if (this.state.user[0]) {
            this.state.user.forEach(name => {
                if (name.id == states.id) {
                    console.log("ayeee")
                    // this.updateState(states)
                    // return null;
                 } else {
                    console.log("WHOT")
                    this.updateState(states)
                    // this.updateState(states)
                }
            })
        } else {
            this.updateState(states)
        }
        console.log(Bi(CheckIfIDExists))

        this.updateState(states)
        */

        console.log(this.state)
    }

    handleDeleteBtn = (id) => {
        console.log(id);
        let users = this.state.user.filter(name => {
            return name.id !== id
        })

        this.setState({
            user: users
        })
    }

    render() {
        return ( 
            <div className = "maindiv">
                <App takeState = {this.takeState}/> 
                <Names handleDeleteBtn = {this.handleDeleteBtn} names = {this.state.user}/> 
            </div>
        );
    }
}

export default MainDiv;