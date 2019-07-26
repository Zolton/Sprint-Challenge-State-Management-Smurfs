import React, { Component } from "react";
import "./App.css";
import {connect} from "react-redux"

function App () {

const fetchSmurfs = () => {
  return <></>
}

    return (
      <div className="App">
        Hello from App
        <button onClick={()=>{fetchSmurfs()}}>Click Me to Fetch the Smurfs</button>
      </div>
    );
  }

  const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    }
  }


export default connect(mapStateToProps, {})(App)