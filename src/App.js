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
  const [isPopupVisible, setPopupVisible] = useState(false);
  let formError = true;

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

  //Form Validations
  const validateForm = () => {
    //First Name Validation
    if (formData.firstName.trim() === "") {
      setfirstNameErr("Enter valid First Name");
      document.getElementById("firstName").className = "form-control error";
      formError = true;
      return formError;
    } else if (!isNaN(formData.firstName)) {
      setfirstNameErr("Enter valid First Name");
      document.getElementById("firstName").className = "form-control error";
      formError = true;
      return formError;
    } else {
      setfirstNameErr("");
      document.getElementById("firstName").className = "form-control";
      formError = false;
    }

    //Last Name Validation
    if (formData.lastName.trim() === "") {
      setlastNameErr("Enter valid Last Name");
      document.getElementById("lastName").className = "form-control error";
      formError = true;
      return formError;
    } else if (!isNaN(formData.lastName)) {
      setlastNameErr("Enter valid Last Name");
      document.getElementById("lastName").className = "form-control error";
      formError = true;
      return formError;
    } else {
      setlastNameErr("");
      document.getElementById("lastName").className = "form-control";
      formError = false;
    }

    //Email Address Validation
    if (formData.email.trim() === "") {
      setemailErr("Enter valid Email Address");
      document.getElementById("email").className =
        "form-control input-size error";
      formError = true;
      return formError;
    } else if (!isNaN(formData.email)) {
      setemailErr("Enter valid Email Address");
      document.getElementById("email").className =
        "form-control input-size error";
      formError = true;
      return formError;
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)){
      setemailErr("Enter valid Email Address");
      document.getElementById("email").className =
        "form-control input-size error";
      formError = true;
      return formError;
      console.log("in");
    }
    else {
      setemailErr("");
      document.getElementById("email").className = "form-control input-size";
      formError = false;
    }

    //Query Type Validation
    if (formData.queryType.trim() === "") {
      setqueryTypeErr("Please Select a Query Type");
      formError = true;
      return formError;
    } else {
      setqueryTypeErr("");
      formError = false;
    }

    //Message Validation
    if (formData.message.trim() === "") {
      setmessageErr("Enter valid Message");
      document.getElementById("message").className =
        "form-control input-size error";
      formError = true;
      return formError;
    } else if (!isNaN(formData.email)) {
      setmessageErr("Enter valid Message");
      document.getElementById("message").className =
        "form-control input-size error";
      formError = true;
      return formError;
    } else {
      setmessageErr("");
      document.getElementById("message").className = "form-control input-size";
      formError = false;
    }

    //Consent Validation
    if (!document.getElementById("consentChecked").checked) {
      setconsentErr("To submit this form, please consent to being contacted");
      formError = true;
      return formError;
    } else {
      setconsentErr("");
      formError = false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();

    if (formError == false) {
      console.log("form submit", formData);

      //Reset Form Values
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("queryType").checked = false;
      document.getElementById("message").value = "";
      document.getElementById("consentChecked").checked = false;

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

      setPopupVisible(true);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setPopupVisible(false);
      }, 3000);
     
    }

    // alert("form submitted");
  };

  return (
    <div className="App">
      <div className="mainBlock container">
        <h1 className="heading"> Contact Us </h1>
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
              <div className="row queryType-row">
                <div className="col-md-6 queryType-marg">
                  <div className="form-check radio-css">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="queryType"
                      id="queryType"
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
                      id="queryType"
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
                <label className="custom-control-label marg-left-2" for="customCheck1">
                  I consent to be contacted by the team{" "}
                  <span className="col-green">*</span>
                </label>
              </div>
              <div className="errorMessage">{consentErr}</div>
            </div>
            <div className="row">
              <button
                type="submit"
                className="btn btn-green"
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

      {isPopupVisible && (
        <div className="popup">
          <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21"><path fill="#fff" d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"/></svg> <span className="marg-left-2">Message sent</span></p>
          <p>Thanks for completing the form. We'll be in touch soon.</p>
        </div>
      )}
 
    </div>
  );
}

export default App;
