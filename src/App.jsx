import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    addressTo: "",
    empId: "",
    issuedOn: "",
    purpose: "",
  });
  const inputs = [
    {
      id: 1,
      name: "addressTo",
      type: "text",
      placeholder: "Required",
      errorMessage:
        "This field is required and only alphanumeric values are allowed.",
      label: "Address To",
      pattern: "^[A-Za-z0-9]+$",
      required: true,
    },
    {
      id: 2,
      name: "employeeId",
      type: "text",
      placeholder: "Required",
      errorMessage:
        "This field is required and only numeric values are allowed.",
      label: "Employee Id",
      pattern: "^[0-9]+$",
      required: true,
    },
    {
      id: 3,
      name: "issuedOn",
      type: "date",
      placeholder: "Required",
      errorMessage: "This field is required and only future dates are allowed",
      label: "Issued On",
      required: true,
    },
    {
      id: 4,
      name: "purpose",
      type: "textarea",
      placeholder: "Required",
      errorMessage:
        "This field is required and the input must be more than 50 characters.",
      label: "Purpose",
      pattern: "^.{50,}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Certification request platform</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="formButtons">
          <button className="submitButton">Submit Request</button>
          <button className="requestButton">Submitted Requests</button>
        </div>
      </form>
    </div>
  );
};

export default App;
