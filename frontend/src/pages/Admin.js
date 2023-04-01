import React, { useState } from 'react';
import "./style/Admin.css"

const Admin = () => {

  const [inputs, setInputs] = useState({ category: "Health Care", description: "", info: "", contact: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    console.log(formData)

    fetch('/api/listing', {
      method: 'post', body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <div>
      <h1>Admin page</h1>
      <form className="admin_form" method="post" onSubmit={handleSubmit}>
        <label className="inputElement" htmlFor="org">Name/Organization</label>
        <input className="inputElement" type="text" id="org" placeholder="Organization Name..." name="org" value={inputs.org || ""} onChange={handleChange}></input>
        <label className="inputElement" htmlFor="category">Category</label>
        <select className="inputElement" name="category" id="category" value={inputs.category || ""} onChange={handleChange}>
          <option value="health">Health Care</option>
          <option value="youth">Youth Support</option>
          <option value="community">Community Support</option>
          <option value="shelters">Shelters</option>
          <option value="immigration">Immigration Support</option>
          <option value="food">Food Bank</option>
          <option value="other">Others</option>
        </select>

        <label className="inputElement" htmlFor="description">Description</label>
        <textarea className="inputElement" id="description" name="description" rows="4" cols="50" value={inputs.description || ""} onChange={handleChange} />
        <label className="inputElement" htmlFor="info">Additional Information</label>
        <textarea className="inputElement" id="info" name="info" rows="4" cols="50" value={inputs.info || ""} onChange={handleChange} />

        <label className="inputElement" htmlFor="address">Address</label>
        <input className="inputElement" type="text" name="address" id="address" value={inputs.address || ""} onChange={handleChange}></input>

        <p>Sign Up Method</p>
        <label htmlFor="email">E-mail: </label>
        <input type="radio" name="method" id="email" value="email" onChange={handleChange}></input>
        <label htmlFor="web">Website: </label>
        <input type="radio" name="method" id="web" value="web" onChange={handleChange}></input>

        <label className="inputElement" htmlFor="contactName">Contact Name (if applicable)</label>
        <input className="inputElement" type="text" name="contactName" id="contactName" value={inputs.contactName || ""} onChange={handleChange}></input>

        <label className="inputElement" htmlFor="contact">Email/Website</label>
        <input className="inputElement" type="text" name="contact" id="contact" value={inputs.contact || ""} onChange={handleChange}></input>

        <input type="submit" value="Submit"></input>

      </form>
    </div>
  );
};

export default Admin;