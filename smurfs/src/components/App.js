import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { GET_SMURF } from "./actions/action";

function App(props) {
  const fetchSmurfs = () => {
    props.GET_SMURF();
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          fetchSmurfs();
        }}
      >
        Click Me to Fetch the Smurfs
      </button>
      {props.smurfs ? (
        props.smurfs.map(smurf => 
        <>
        <h3>Name: {smurf.name}</h3>
        <h3>Age: {smurf.age}</h3>
        <h3>Height: {smurf.height}</h3>
        </>)
      ) : (
        <h1> Loading, please wait</h1>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { GET_SMURF }
)(App);
