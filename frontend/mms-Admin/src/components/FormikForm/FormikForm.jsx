/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Formik } from 'formik';

function FormikForm({ children, initialValues, validationSchema, ...props }) {
  return (
    <div className={props.className}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="flex justify-center items-center flex-col">
            {children}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
