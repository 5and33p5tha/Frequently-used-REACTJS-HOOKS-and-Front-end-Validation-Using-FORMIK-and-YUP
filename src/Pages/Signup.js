import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./signup.css";
import { Formik, ErrorMessage, Field, Form } from "formik";
//Here, Form is the form of FORMIK, so insted of <form>, better to use <Form>
//While using <Form> of formik, change Field to Field
import * as Yup from "yup";

// For Error Message Link, = Formik, This is mostly used just for forms and Put just above where form begins
// For Validation, = Yup
// Note:- Internal CSS IS NOT ALLOWED IN REACT

//Documentation:-https://formik.org/docs/overview

// Formik and Yup enables us to validate the form in REACT.JS
//IT IS FOR FRONT END FORM VALIDATION
//FORM VALIDATION IS FASTER IN FRONT END
//BUT USING FORMIK DOES NOT LET US PASS DATA TO BACKEND. ATLEAST NOT UNTILL THIS PROJECT WAS DONE.
//SO WE WILL NOT USE FORMIK TO CONNECT FRONT AND BACK END

const Signup = () => {
  return (
    <>
      {/* <div className='container-sm'> THIS WILL CREATE SMALL CONTAINER(NOT CONTAINER IN SMALL SCREEN BUT SMAL CONTAINER) */}
      {/* CHECK BOOTSTRAP DOCUMENTS FOR MORE DETAILS
            BOOTSTRAP DOCUMENTATION:- https://getbootstrap.com/docs/5.1/layout/containers/ */}

      {/* 
            HERE FORM FLOATING FLOATS THE GIVEN LABEL TO SHIFT IT UPWARDS.

            FORM CONTROL DOES NOT LET THE BOX TO BE PRESSED IN OR OUT I.E IT DEFINES A FIXED REQUIRED SPACE. IT IS LIKE BOX-SIZING:BORDER BOX IN CSS, IT PUTS EVERYTHING IN ORDER */}

      {/* FORM CHECK BINDS BOTH LABEL AND Field BUTTON IN SAME. I.E NO NEED TO CLICK SPECIFICALLY ON BUTTON, WILL ASLO WORK WHEN CLICKED ON THE Field TYPE name */}

      <Navbar />

      {/* <h1>HELLO, THIS IS LOGIN PAGE</h1> */}

      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          cpassword: "",
          // These are all new defined terms for formik which is not in our form
        }}
        //VALIDATION Via FORMIK & YUP
        validationSchema={Yup.object({
          first_name: Yup.string()
            //This first_name is from Formik and Yup.Object is an object used in Formik
            // This signifies that the first_name must be a string

            .required("First Name is REQUIRED")
            // This signifies that the first_name is required

            .min(2, "First Name Must Be Atleast 2 Characters Long")
            // This signifies that the first_name Should be atleast 2 characters long

            .max(30, "First Name Must Be Less or Equal To 30 Characters Long"),
          // This signifies that the first_name Should Less or Equal To 30 Characters Long

          last_name: Yup.string()
            .required("Last Name is REQUIRED")
            .min(2, "Last Name Must Be Atleast 2 Characters Long")
            .max(30, "Last Name Must Be Less or Equal To 30 Characters Long"),

          email: Yup.string()
            .required("email is required")
            .min(10, "Email must be atleast 10 characters long")
            .max(40, " Email must be no more than 40 characters")
            .email("Email format is invalid"),

          password: Yup.string()
            .required("Password is required")
            .matches(
              /(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!_#$%^&*_-])/,
              "The Password must contail atleast a lower case and upper case letter wih atleast a number and a special character"
            )
            // TRY TO GIVE IT IN SAME ORDER OR ELSE THIS MAY NOT WORK SOMETIMES
            .min(10, "Password must be atleast 10 characters long")
            .max(40, " Password must be no more than 40 characters"),

          cpassword: Yup.string()
            .required("Password is required")
            .oneOf([Yup.ref("password")], "Passwords does not match"),
          //This is to match the values in Formik, IT CHECKS THE YUP REFERENCE AND SEES IF THEY MATCH</>
        })}
      >
        {/* The label for  and id of the form should be same, THIS WILL CREATE AN EFFECT WHEN CLICKED, THE Field WILL GO IN THE BOX */}

        <div className="container w-50 mx-auto mt-5">
          <main className="form-signin">
            <Form>
              <div className="text-center">
                <img
                  className="mb-4"
                  src="./logo192.png"
                  alt=""
                  width="72"
                  height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              </div>
              <div className="form-floating">
                {/* WHERE TO USE INPUT AND WHERE TO USE FIELD? 
                SIMPY USE FIELD FOR WHOM WE HAVE DEFINED VALIDATION AND USE INPUT FOR WHOM WE HAVE NOT DEFINED */}

                <Field
                  type="text"
                  className="form-control"
                  id="floatingfirstname"
                  placeholder="firstname"
                  name="first_name"
                />

                {/* The name is for the whole text-box.
                                For Example:- First Name:=Sandeep
                                Then The first_name gets the value Sandeep.
                                In Short, name is where the value is put. */}

                {/* HERE, THE name="first_name" is from Formik */}
                {/* Instead of <Input type> </Input> We Use <Field type></Field> in FORMIK */}

                {/* SINCE FORM CONTROL PUTS THE LABEL IN PLACE OF PLACEHOLDER I.E INSIDE THE BOX, THE PLACEHOLDER WILL NOT WORK HERE */}

                <label htmlFor="floatingField">Enter First Name Here</label>
                <ErrorMessage name="first_name">
                  {(msg) => <div style={{ color: "maroon" }}>{msg}</div>}
                  {/* Here, Error Message will be displayed in name="first_name" */}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <Field
                  type="text"
                  className="form-control"
                  id="floatinglastname"
                  placeholder="lastname"
                  name="last_name"
                />
                {/* HERE, THE name="last_name"is from Formik */}

                {/* SINCE FORM CONTROL PUTS THE LABEL IN PLACE OF PLACEHOLDER I.E INSIDE THE BOX, THE PLACEHOLDER WILL NOT WORK HERE */}

                <label htmlFor="floatingField">Enter Last Name Here</label>
                <ErrorMessage name="last_name">
                  {(msg) => <div style={{ color: "maroon" }}>{msg}</div>}
                  {/* Here, Error Message will be displayed in name="first_name" */}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <input
                  //Put Date Of Birth As input instead of field, ELSE WE CANNOT SELECT ANY VALUE
                  type="date"
                  className="form-control"
                  //No form-control-input
                  id="floatingdate"
                  placeholder="dd/mm/yy"
                />

                {/* SINCE FORM CONTROL PUTS THE LABEL IN PLACE OF PLACEHOLDER I.E INSIDE THE BOX, THE PLACEHOLDER WILL NOT WORK HERE */}

                <label htmlFor="floatingField">Select Your Date Of Birth</label>
              </div>
              <div className="form-control mb-1">
                <label className="form-floating">
                  {" "}
                  Gender:
                  <div className="d-flex">
                    {/* HERE, DISPLAY FLEX IS DONE HERE SO THAT THE ONLY THE BELOW OPTIONS ARE DISPLAYED AS FLEX AND NOT THE LABEL "GENDER" ITSELF */}

                    <div className="form-check ms-5">
                      <Field
                        className="form-check-Field"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Male" //Value is needed or Else in FORMIK, The Option Will Disappear While Selecting Next Field
                      />

                      {/* <Field className="form-check-Field" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/> */}

                      {/* IN REACT, WE REMOVE CHECKED FROM Field TYPE FORM-CHECK-Field At The End as in above*/}

                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Male
                      </label>
                    </div>

                    <div className="form-check">
                      <Field
                        className="form-check-Field"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Female" //Value is needed or Else in FORMIK, The Option Will Disappear While Selecting Next Field
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Female
                      </label>
                    </div>

                    <div className="form-check">
                      <Field
                        className="form-check-Field"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                        value="Other" //Value is needed or Else in FORMIK, The Option Will Disappear While Selecting Next Field
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                </label>
              </div>
              <div className="form-floating">
                <Field
                  type="email"
                  className="form-control"
                  id="floatingField"
                  placeholder="name@example.com"
                  name="email"
                />

                {/* SINCE FORM CONTROL PUTS THE LABEL IN PLACE OF PLACEHOLDER I.E INSIDE THE BOX, THE PLACEHOLDER WILL NOT WORK HERE */}

                <label htmlFor="floatingField">Email address</label>
                <ErrorMessage name="email">
                  {(msg) => <div style={{ color: "maroon" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <Field
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                />
                <label htmlFor="floatingPassword">Password</label>
                <ErrorMessage name="password">
                  {(msg) => <div style={{ color: "maroon" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <Field
                  type="password"
                  className="form-control"
                  id="floatingCPassword"
                  placeholder="Confirm Password"
                  name="cpassword"
                />
                <label htmlFor="floatingCPassword">Confirm Password</label>
                <ErrorMessage name="cpassword">
                  {(msg) => <div style={{ color: "maroon" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> I accept all the
                  Terms and Conditions
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Register
              </button>
              <br></br>
              <br />
              Already have an account? <Link to="/Login">Sign In Here</Link>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </Form>
          </main>
        </div>
      </Formik>
      <Footer />
    </>
  );
};

export default Signup;
