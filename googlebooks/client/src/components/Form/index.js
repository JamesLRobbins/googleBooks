import React, {Component} from "react";
import "./style.css"

function Form({ name, handleChange, handleSubmit }) {
  return (
    <div className="container search">
    <form className="form-inline" role="form">
      <div className="form-group">
        <label htmlFor="Title" className="sr-only">
          Search Book by Title
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={name}
          placeholder="Book Title..."
          name="name"
          onChange={handleChange}
          size="55"
          required
        />
      </div>
  
      <button
        onClick={handleSubmit}
        type="submit"
        className="btn btn-dark"
      >
        Search
      </button>
    </form>
    </div>
  );
}

export default Form
