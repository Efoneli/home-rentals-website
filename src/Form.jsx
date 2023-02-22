import React from "react";
import { Formik } from "formik";
import { FiChevronDown, } from "react-icons/fi";


const Form = () => (
  <div className="m-10 grid place-content-center">
    <h1 className="font-bold m-4">
      Your Property With Us And Be Confident That Your Room Will Be Out!
    </h1>
    <div className="grid place-content-center">
      <div className="bg-white rounded grid place-items-center shadow-md shadow-[#252525] w-[100%] p-5 m-4">
        <h1 className="text-[#F4511E] font-bold text-xl m-3 p-3">
          Add A New Property
        </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
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
              <div className="flex justify-between items-center">
                <label>
                  <p className="px-3 font-bold">Name</p>
                  <br />
                  <input
                    className="text-sm p-2 mx-3 border border-zinc-400 rounded bg-zinc-100"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
                {errors.name && touched.name && errors.name}
                <label>
                  <p className="px-3 font-bold">Address</p>
                  <br />
                  <input
                    className="text-sm p-2 mx-3 border border-zinc-400 rounded bg-zinc-100"
                    type="address"
                    name="address"
                    placeholder="Enter Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
                {errors.address && touched.address && errors.address}
                <label>
                  <p className="px-3 font-bold">Unit Number</p>
                  <br />
                  <input
                    className="text-sm p-2 mx-3 border border-zinc-400 rounded bg-zinc-100"
                    type="text"
                    name="text"
                    placeholder="Enter Unit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
                {errors.email && touched.email && errors.email}
              </div>

              <div className="flex justify-between items-center my-3">
                <div>
                <label>
                  <p className="px-3 font-bold">City</p>
                  <br />
                  </label>
                  <div className="flex items-center justify-between border border-zinc-400 bg-zinc-100 rounded py-2 px-5 ml-3">
                    <p  className="mx-3">Select City</p>
                    <div className="mx-3">
                    <FiChevronDown />
                    </div>
                  </div>
                </div>

                <div>
                <label>
                  <p className="px-3 font-bold">State</p>
                  <br />
                  </label>
                  <div className="flex items-center justify-between border border-zinc-400 bg-zinc-100 rounded py-2 px-5 ml-3">
                    <p  className="mx-3">Select State</p>
                    <div className="mx-3">
                    <FiChevronDown />
                    </div>
                  </div>
                </div>

                <div>
                <label>
                  <p className="px-3 font-bold">Room</p>
                  <br />
                  </label>
                  <div className="flex items-center justify-between border border-zinc-400 bg-zinc-100 rounded py-2 px-5 ml-3">
                    <p  className="mx-3">Select Room</p>
                    <div className="mx-3">
                    <FiChevronDown />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <label>
                  <p className="px-3 font-bold">Price</p>
                  <br />
                  <input
                    className="text-sm p-2 mx-3 border border-zinc-400 rounded bg-zinc-100"
                    type="number"
                    name="price"
                    placeholder="Enter Price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
                {errors.email && touched.email && errors.email}
                <div>
                <label>
                  <p className="px-3 font-bold">Room</p>
                  <br />
                  </label>
                  <div className="flex items-center justify-between border border-zinc-400 bg-zinc-100 rounded py-2 px-5 ml-3">
                    <p  className="mx-3">Select Room</p>
                    <div className="mx-3">
                    <FiChevronDown />
                    </div>
                  </div>
                </div>

              </div>
              <label className="font-bold m-2">
                Description
                <br />
                <textarea
                  className="m-2 border border-zinc-200 rounded p-2 bg-zinc-100"
                  placeholder="Enter Description"
                  name="message"
                  rows="6"
                  cols="100"
                ></textarea>
              </label>

              <p className="font-bold m-2">Upload Photos</p>
              <div className="grid place-items-center ">
                <div className="grid place-items-center w-full border border-dashed border-[#F4511E] rounded p-3 my-2 ml-4">
                  <h2>
                    Drag your images here, or{" "}
                    <span className="text-[#F4511E]">browse</span>
                  </h2>
                  <p className="text-zinc-400 text-sm">
                    Supposed JPG, JPEG, PNG
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#F4511E] rounded px-12 py-2 text-white m-4 "
                >
                  Add New Property
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  </div>
);

export default Form;
