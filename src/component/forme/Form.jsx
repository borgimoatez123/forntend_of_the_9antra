import { useState } from "react";
import React from "react";
import "./from.css";
export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données du formulaire:", formData);
  };
  return (
    <>
    <div className="containerss">
      <div className="carteform">
        <div className="formcart">
          <h2>Contact Us</h2>
          <form  onSubmit={handleSubmit}>
            <label>NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jiara Martins"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>

            <div href="" className="buttonform">
              Send the message
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
