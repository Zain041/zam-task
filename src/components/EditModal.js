import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditTypeModal = (props)=> {
  const initialValues = {
    name: props.name || "",
    description: props.description || "",
    image: ""

  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required!"),
    description: Yup.string().required("This field is required!"),
  });
    return (
      <div>
        <Modal isOpen={props.open} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
          <ModalBody>
           
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <h3 className="card-heading">Create Type</h3>
 
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={props.handleEdit}
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
            props.setFieldValue(event.currentTarget.files[0]);
}} />

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" disabled={props.loading}>
                {props.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Add</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>

      {props.message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {props.message}
          </div>
        </div>
      )}
    </div>
          </ModalBody>
          <ModalFooter>
            <Button color='danger' onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

export default EditTypeModal