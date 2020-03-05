import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tournaments from './components/tournaments';
import Matches from './components/matches';
import TopBettors from './components/topbettors';
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tournaments: [],
      endpoint: "http://203.91.119.246:8001",
      response:[]
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render(){
    document.title = "Steam.mn";
    return (
      <div className="container">
        <div className="row">
            <Tournaments/>
        </div>
        <div className="row">
          <div className="col-md-9">
            <Matches/>
          </div>
          <div className="col-md-3">
            <TopBettors/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
