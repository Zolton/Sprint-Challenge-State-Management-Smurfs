import { withFormik, Form, Field } from "formik";
import {addSmurf} from "../actions/action"
import React from "react"
import ReactDOM from "react-dom"

function addSmurfForm() {
  return (
    <Form>
      <div />
      <div>
        {" "}
        <Field name="name" type="text" />
      </div>
      <div>
        <Field name="age" type="text" />
      </div>
      <div>
        <Field name="height" type="text" />
      </div>
      <button type="submit">Send new smurf to the village</button>
    </Form>
  );
}

const FormikForm = withFormik ({
    mapPropsToValues({name, age, height}){
        return {
            name: name || "",
            age: age || "",
            height: height || ""
        }
    },
    handleSubmit(values, {resetForm, props}) {
        console.log("props on handleSubmit")
        console.log(props)
        props.addSmurf(values);
        resetForm();
    }
})(addSmurfForm)

export default FormikForm