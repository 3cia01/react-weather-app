import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Lagos</h1>
      <ul>
        <li>Wednesday 29th</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
          />
        </div>
        <div className="col-6">
          <input type="submit" value="search" className="btn btn-primary" />
        </div>
      </div>
    </div>
  );
}
