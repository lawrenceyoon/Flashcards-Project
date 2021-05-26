import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Button from '../Button';

const Create = () => {
  // state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  // event handlers
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="Create">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home">&nbsp;</span>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Deck Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-control"
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Brief description of the deck"
            required
          ></textarea>
        </div>
        <Link to="/">
          <Button color="btn-secondary" text="Cancel" />
        </Link>
        <Button color="btn-primary" text="Submit" />
      </form>
    </div>
  );
};

export default Create;
