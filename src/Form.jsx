import React, { useState } from 'react';

const Form = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Simulating an error condition
    const error = true;

    if (error) {
      setErrorMessage('Please fill out all required fields.');
    } else {
      // Submit the form
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Form;