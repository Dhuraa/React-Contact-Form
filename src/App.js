import "./App.css";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });
  const [firstNameErr, setfirstNameErr] = useState("");
  const [lastNameErr, setlastNameErr] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [queryTypeErr, setqueryTypeErr] = useState("");
  const [messageErr, setmessageErr] = useState("");
  const [consentErr, setconsentErr] = useState("");
  const [formError, setformError] = useState(true);

  const handleChange = (e) => {
    
    if (document.getElementById("consentChecked").checked) {
      setFormData(() => {
        return {
          ...formData,
          [e.target.name]: e.target.value,
          consent: true,
        };
      });
    } else {
      setFormData(() => {
        return {
          ...formData,
          [e.target.name]: e.target.value,
          consent: false,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in")
    setformError(false);

    //First Name Validation
    if (formData.firstName.trim() === "") {
      setfirstNameErr("Enter valid First Name");
      document.getElementById("firstName").className = "form-control error";
      setformError(true);
    } else if (!isNaN(formData.firstName)) {
      setfirstNameErr("Enter valid First Name");
      document.getElementById("firstName").className = "form-control error";
      setformError(true);
    } else {
      setfirstNameErr("");
      document.getElementById("firstName").className = "form-control";
      setformError(false);
    }

    //Last Name Validation
    if (formData.lastName.trim() === "") {
      setlastNameErr("Enter valid Last Name");
      document.getElementById("lastName").className = "form-control error";
      setformError(true);
    } else if (!isNaN(formData.lastName)) {
      setlastNameErr("Enter valid Last Name");
      document.getElementById("lastName").className = "form-control error";
      setformError(true);
    } else {
      setlastNameErr("");
      document.getElementById("lastName").className = "form-control";
      setformError(false);
    }

    //Email Address Validation
    if (formData.email.trim() === "") {
      setemailErr("Enter valid Email Address");
      document.getElementById("email").className =
        "form-control input-size error";
        setformError(true);
    } else if (!isNaN(formData.email)) {
      setemailErr("Enter valid Email Address");
      document.getElementById("email").className =
        "form-control input-size error";
        setformError(true);
    } else {
      setemailErr("");
      document.getElementById("email").className = "form-control input-size";
      setformError(false);
    }

    //Query Type Validation
    if (formData.queryType.trim() === "") {
      setqueryTypeErr("Please Select a Query Type");
      setformError(true);
    } else {
      setqueryTypeErr("");
      setformError(false);
    }

    //Message Validation
    if (formData.message.trim() === "") {
      setmessageErr("Enter valid Message");
      document.getElementById("message").className =
        "form-control input-size error";
        setformError(true);
    } else if (!isNaN(formData.email)) {
      setmessageErr("Enter valid Message");
      document.getElementById("message").className =
        "form-control input-size error";
        setformError(true);
    } else {
      setmessageErr("");
      document.getElementById("message").className = "form-control input-size";
      setformError(false);
    }

    //Consent Validation
    if (!document.getElementById("consentChecked").checked) {
      setconsentErr("To submit this form, please consent to being contacted");
      setformError(true);
    }
    else{
      setconsentErr("");
      setformError(false);
    }

    if(formError == false ){
      console.log("form submit", formData);
      setFormData(() => {
        return {
          firstName: "",
          lastName: "",
          email: "",
          queryType: "",
          message: "",
          consent: false,
        };
      });
      alert("form submitted");
    }

  };

  return (
    <div className="App">
      <div className="mainBlock container">
        <h1> Contact Us </h1>
        <div>
          <form>
            <div className="row">
              <div className="col-md-6">
                <label for="firstName" className="form-label">
                  First Name <span className="col-green">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  defaultValue={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <div className="errorMessage">{firstNameErr}</div>
              </div>
              <div className="col-md-6">
                <label for="lastName" className="form-label">
                  Last Name <span className="col-green">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  defaultValue={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <div className="errorMessage">{lastNameErr}</div>
              </div>
            </div>
            <div className="row">
              <label for="email" className="form-label">
                Email Address <span className="col-green">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control input-size"
                defaultValue={formData.email}
                onChange={handleChange}
                required
              />
              <div className="errorMessage">{emailErr}</div>
            </div>
            <div className="row">
              <label for="queryType" className="form-label">
                Query Type <span className="col-green">*</span>
              </label>
              <div className="row">
                <div className="col-md-6 ">
                  <div className="form-check radio-css">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="queryType"
                      id="GeneralEnquiry"
                      defaultValue="General Enquiry"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" for="GeneralEnquiry">
                      General Enquiry
                    </label>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-check radio-css">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="queryType"
                      id="SupportRequest"
                      defaultValue="Support Request"
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" for="SupportRequest">
                      Support Request
                    </label>
                  </div>
                </div>
              </div>
              <div className="errorMessage">{queryTypeErr}</div>
            </div>
            <div className="row">
              <label for="message" className="form-label">
                Message <span className="col-green">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                className="form-control input-size"
                defaultValue={formData.message}
                onChange={handleChange}
                required
              />
              <div className="errorMessage">{messageErr}</div>
            </div>
            <div className="row">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="consentChecked"
                  name="consent"
                  onChange={handleChange}
                  required
                />
                <label className="custom-control-label" for="customCheck1">
                  I consent to be contacted by the team <span className="col-green">*</span>
                </label>
              </div>
              <div className="errorMessage">{consentErr}</div>
            </div>
            <div className="row">
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Dhura Mistry</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
