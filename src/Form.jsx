import React from 'react';
import { Formik } from 'formik';

const Form = () => (
  <div>
    <h1>Add A New Property</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className='bg-red-500 flex'>
          <label>Name<br />
            <input
            className=''
            type="text"
            name="name"
            placeholder='Enter Name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /></label>
          {errors.name && touched.name && errors.name}
          <label>Address<br />
          <input
            type="email"
            name="email"
            placeholder='Enter Address'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /></label>
          {errors.email && touched.email && errors.email}
          <label>Unit Number<br />
          <input
            type="text"
            name="text"
            placeholder='Enter Unit'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /></label>
          {errors.email && touched.email && errors.email}
          </div>

          <label>City</label><br />
          <select name="city">
            <option value="Select City">Select City</option>
          </select>
          <label>State</label><br />
          <select name="state">
            <option value="Select State">Select State</option>
          </select>
          <label>Room Type</label><br />
          <select name="type">
            <option value="Select Room Type">Select Room Type</option>
          </select>
          <input
            type="number"
            name="price"
            placeholder='Enter Price'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <select name="type">
            <option value="Select Room Type">Room Type</option>
          </select>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;