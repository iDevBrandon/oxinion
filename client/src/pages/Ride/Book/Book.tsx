import React from "react";

const Book = () => {
  return (
    <div className="booking--container">
      <div className="form--step">
        <ul>
          <li>
            <span>1</span>
            <small>Journey Information</small>
          </li>
          <li>
            <span>2</span>
            <small>Select Vehicle</small>
          </li>
          <li>
            <span>3</span>
            <small>Payment</small>
          </li>
        </ul>
      </div>
      <form className="booking--form">
        <div className="form--left">
          <div className="booking--form--info">
            <h3>Journey Information</h3>
            <div className="form--location">
              <div className="input--group">
                <label className="form--label">Collection Address</label>
                <input
                  type="text"
                  id="pl-input"
                  className="form--input"
                  placeholder="Type location..."
                />
              </div>
              <div className="input--group">
                <label className="form--label">Destination Address</label>
                <input
                  type="text"
                  id="pl-input"
                  className="form--input"
                  placeholder="Type location..."
                />
              </div>
            </div>
          </div>

          <div className="booking--form--options">
            <h3>Options</h3>
            <div className="form--location">
              <div className="input--group">
                <label className="form--label">Direction</label>
                <select className="input--select">
                  <option value="1">One Way</option>
                  <option value="2">Return</option>
                </select>
              </div>
              <div className="input--group">
                <label className="form--label">Passengers</label>
                <select className="input--select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7+</option>
                </select>
              </div>
              <div className="input--group">
                <label className="form--label">Departure Date</label>
                <input
                  type="text"
                  className="form--input"
                  placeholder="Any date you want..."
                />
              </div>
              <div className="input--group">
                <label className="form--label">Departure Time</label>
                <input
                  type="text"
                  className="form--input"
                  placeholder="We will be on time..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form--right">
          <div className="booking--form--map">
            <h3>Map</h3>
            <div className="form--location">
              <div id="map"></div>

              <div className="input--group">
                <label className="form--label">Distance</label>
                <input
                  type="text"
                  className="form--input"
                  placeholder="00 Miles"
                />
              </div>
              <div className="input--group">
                <label className="form--label">Journey Time</label>
                <input
                  type="text"
                  className="form--input"
                  placeholder="00:00"
                />
              </div>
            </div>
          </div>
          <input type="submit" value="Select Vehicle" className="form__btn" />
        </div>
      </form>
    </div>
  );
};

export default Book;
