import React, { useState } from "react";
import Error from "./Error"
import PropTypes from "prop-types"

const Form = ({ setSearch, setConsultApi }) => {
  const [formData, setFormData] = useState({
    city: "",
    country: "",
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      return setError(true);
    }
    setError(false);

    setSearch(formData);
    setConsultApi(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { city, country } = formData;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {error ? <Error message={"Please check the fields"}/> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="city">City</label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={(e) => handleChange(e)}
        >
          <option value="">--- Select a Country ---</option>
          <option value="US">United States</option>
          <option value="VE">Republic of Venezuela</option>
        </select>
        <label htmlFor="country">Country</label>
      </div>

      <div className="input-field col s12 center-align">
        <input
          type="submit"
          value="Search Weather"
          className="waves-effect waves-light btn-block btn-large yellow accent-4"
        />
      </div>
    </form>
  );
};

Form.proTypes = {
setSearch: PropTypes.func.isRequired,
setConsultApi: PropTypes.func.isRequired
}

export default Form;
