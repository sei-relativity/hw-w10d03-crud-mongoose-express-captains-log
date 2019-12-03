import React, { Component } from "react";
import axios from "axios";

class App extends Component {

  constructor(props){
    super();
    this.state = {
      logs: []
    }
  }

  componentDidMount() {
    axios({

      method: 'GET',
      url: 'http://localhost:5000/logs'
    })
      .then(res => {
        console.log(res.data.logs)
        this.setState({
          logs: res.data.logs
        })
      })
      .catch(error => {
        console.log(error)
      })
  }



  render() { 
     const logs = this.state.logs.map((log)=>{
          return (
            <div>
           <p> <strong>title: </strong>{log.title}</p>
            <p><strong>entry: </strong>{log.entry}</p>
            <p><strong>is the ship broken? </strong>{log.shipIsBroken.toString()}</p>
            <br/>
            <br/>
            </div>)})
    return (
      <div>
        {logs}
      </div>
    );
  };
}

export default App;
