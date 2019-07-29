import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { GET_SMURF, addSmurf, deleteSmurf } from "./actions/action";
import FormikForm from "./Forms/formikForm";

function App(props) {
  const fetchSmurfs = () => {
    props.GET_SMURF();
  };

  const deleteSmurfs = id => {
    props.deleteSmurf(id);
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
        props.smurfs.map(smurf => (
          <>
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
            <button onClick={() => deleteSmurfs(smurf.id)}>Delete</button>
          </>
        ))
      ) : (
        <h1> Loading, please wait</h1>
      )}
      <FormikForm addSmurf={props.addSmurf} />
      {console.log("props on app")}
      {console.log(props)}
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
  { GET_SMURF, addSmurf, deleteSmurf }
)(App);
