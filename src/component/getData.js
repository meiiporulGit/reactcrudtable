import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {Link}from "react-router-dom"
import ErrorProps from "./error";
import "./styles.css"
import { toast } from "react-toastify";
// axios.defaults.baseURL = 'http://localhost:8080/Persons'

export default function GetData() {
  const initialValues = {
    name: "",
    class: "",
    sub1: "",
    sub2: "",
   
  };
  const onSubmit = (values,{resetForm}) => {
    alert(JSON.stringify(values));
    axios
      .post("http://localhost:8080/Persons/post", values)
      .then((res) => {
        toast.success(res.data)
        console.log("i",res.data)
      })
      .catch((e) => console.log(e));
    resetForm()
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    class: Yup.string().required("Required"),
    sub1: Yup.number().required("Required"),
    sub2: Yup.number().required("Required"),
    
  });
  return (
      <div className="form">
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="listform">
        <h1 className="text">Student Information</h1>
        <Field type="text" placeholder="Student Name" name="name" />
        <ErrorMessage name="name">
          {(error) => <ErrorProps>{error}</ErrorProps>}
        </ErrorMessage>
        <Field type="text" placeholder="Class" name="class" />
        <ErrorMessage name="class">
          {(error) => <ErrorProps>{error}</ErrorProps>}
        </ErrorMessage>
        <Field type="number" placeholder="sub1 Mark" name="sub1" />
        <ErrorMessage name="sub1">
          {(error) => <ErrorProps>{error}</ErrorProps>}
        </ErrorMessage>
        <Field type="number" placeholder="sub2 Mark" name="sub2" />
        <ErrorMessage name="sub2">
          {(error) => <ErrorProps>{error}</ErrorProps>}
        </ErrorMessage>
        <button className="submit" type="submit">Submit</button>
        <Link to="/list">
            <button className="acc">Mark List</button>
          </Link>
      </Form>
    </Formik>
    </div>
  );
}