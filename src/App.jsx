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
      label: "Address To",
    },
    {
      id: 2,
      name: "employeeId",
      type: "text",
      placeholder: "Required",
      label: "Employee Id",
    },
    {
      id: 3,
      name: "issuedOn",
      type: "date",
      placeholder: "Required",
      label: "Issued On",
    },
    {
      id: 4,
      name: "purpose",
      type: "text",
      placeholder: "Required",
      label: "Purpose",
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
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Click me</button>
      </form>
    </div>
  );
};

export default App;
