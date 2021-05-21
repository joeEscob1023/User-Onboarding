import React from "react";

const Form = (props) => {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add a User</h2>
        <button id="button" disabled={disabled}>
          Submit
        </button>
      </div>
      <div>{errors.name}</div>
      <div>{errors.email}</div>
      <div>{errors.password}</div>
      <h4>General Information</h4>
      <label>
        Name&nbsp;
        <input
          value={values.name}
          onChange={onChange}
          name="name"
          type="text"
        />
      </label>
      <label>
        Email&nbsp;
        <input
          value={values.email}
          onChange={onChange}
          name="email"
          type="text"
        />
      </label>
      <label>
        Password&nbsp;
        <input
          value={values.password}
          onChange={onChange}
          name="password"
          type="password"
        />
      </label>
      <div>
        <label>
          Terms Of Service
          <input
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
};

export default Form;
