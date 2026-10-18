
import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="form-section">
      <h1>Employee Form</h1>
      <p className="subtitle">Enter employee details below.</p>

      <form className="employee-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="designation">Designation</label>
        <input
          id="designation"
          name="designation"
          type="text"
          placeholder="Enter designation"
          value={formData.designation}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          name="salary"
          type="number"
          min="0"
          placeholder="Enter salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Details</button>

        {submitted && (
          <p className="success-message">
            Form submitted successfully! No data was sent to a server.
          </p>
        )}
      </form>
    </section>
  );
}

export default EmployeeForm;
