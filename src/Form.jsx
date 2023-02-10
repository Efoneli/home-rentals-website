import React from 'react';
import { Formik } from 'formik';

const Form = () => (
  <div className='m-10 grid place-content-center bg-blue-600'>
    <h1 className='font-bold m-4'>
      Your Property With Us And Be Confident That Your Room Will Be Out!
    </h1>
    <div className='grid place-content-center'>
    <div className='bg-white rounded grid place-items-center shadow-md shadow-[black] w-[100%] p-5 m-4'>
    <h1 className='text-[#F4511E] font-bold text-xl m-3 p-3'>Add A New Property</h1>
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
          <div className='flex'>
          <label><p className=' font-bold'>Name</p><br />
            <input
            className='text-sm p-2 mx-3 border border-zinc-400 rounded'
            type="text"
            name="name"
            placeholder='Enter Name'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /></label>
          {errors.name && touched.name && errors.name}
          <label><p className=' font-bold'>Address</p><br />
          <input
            className='text-sm p-2 mx-3 border border-zinc-400 rounded'
            type="address"
            name="address"
            placeholder='Enter Address'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /></label>
          {errors.address && touched.address && errors.address}
          <label><p className=' font-bold'>Unit Number</p><br />
          <input
            className='text-sm p-2 mx-3 border border-zinc-400 rounded bg-zinc-100'
            type="text"
            name="text"
            placeholder='Enter Unit'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /></label>
          {errors.email && touched.email && errors.email}
          </div>

          <div className='flex'>
          <label>City<br />
          <select name="city">
            <option value="Select City">Select City</option>
          </select></label>
          <label>State<br />
          <select name="state">
            <option value="Select State">Select State</option>
          </select></label>
          <label>Room Type<br />
          <select name="type">
            <option value="Select Room Type">Select Room Type</option>
          </select></label>
          </div>

          <div className='flex'>
          <label>Price<br />
          <input
            type="number"
            name="price"
            placeholder='Enter Price'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /></label>
          {errors.email && touched.email && errors.email}
          <label>Room Type<br />
          <select name="type">
            <option value="Select Room Type">Room Type</option>
          </select></label>
          </div>
          <label>Description<br />
          <textarea 
          className=' border border-zinc-400 p-2'
          placeholder='Enter Description'
          name="message" 
          rows="6" 
          cols="100">
          </textarea></label>

          <div className='font-bold'>
          <p>Upload Photos</p>
          <div className='border border-dashed border-[#F4511E]'>
            <h2>Drag your images ere, or <span>browse</span></h2>
            <p>Supposed JPG, JPEG, PNG</p>
          </div>
          </div>

          {/* <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password} */}
          <button type="submit" disabled={isSubmitting}
          className='bg-red-500 p-4 m-4'>
            Add New Property
          </button>
        </form>
      )}
    </Formik>
    </div>
    </div>
  </div>
);

export default Form;