import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { createType } from "../slices/type";
import { clearMessage } from "../slices/message";

const CreateTypes = (props) => {
  const [loading, setLoading] = useState(false);
  const [fileValue, setFieldValue] = useState('')
  const { message } = useSelector((state) => state.message);


  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    name: "",
    description: "",
    image:""

  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required!"),
    description: Yup.string().required("This field is required!"),
  });

  const handleCreateType = (formValue) => {
    const { name, description} = formValue;
    setLoading(true);
    dispatch(createType({  name, description, fileValue }))
      .unwrap()
      .then(() => {
        Redirect('/home')
        setLoading(false)
      })
      .catch(() => {
        setLoading(false);
      });

    createType()
    
  };
  const user = JSON.parse(localStorage.getItem('user'))
  if(!user){
      return <Redirect to='/login'/> 
   }

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <h3 className="card-heading">Create Type</h3>
 
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreateType}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" className="form-control" />
              <ErrorMessage
                name="Name"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <Field name="description" type="textarea" className="form-control" />
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <input  name="image" type="file" onChange={(event) => {
            setFieldValue(event.currentTarget.files[0]);
}} />

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Add</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTypes;
