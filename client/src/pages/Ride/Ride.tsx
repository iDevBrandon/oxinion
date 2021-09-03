import React from "react";
import Header from "../../components/common/Header/Header";
import { FeaturesContainer, FeatureTab, RideFeatures } from "./styles";
import { FaCar } from "react-icons/fa";

const Ride = () => {
  return (
    <div>
      <Header />
      <h2>
        Dear uncle Elon, Would be very honoured if i can particitate in Tesla
        robotaxi project
      </h2>

      {/* <!-- functionality content --> */}
      <RideFeatures>
        <FeaturesContainer>
          <FeatureTab
            className="ride booking__tab booking__tab--active"
            data-tab="1"
          >
            <FaCar />
            <br />
            Ride
          </FeatureTab>
          <FeatureTab className="interest booking__tab" data-tab="2">
            <i className="fas fa-map-marked-alt"></i>
            <br />
            Interest
          </FeatureTab>
          <FeatureTab className="eat booking__tab" data-tab="3">
            <i className="fas fa-utensils"></i>
            <br />
            Eat
          </FeatureTab>
          <FeatureTab className="hotspot booking__tab" data-tab="4">
            <i className="fas fa-heart"></i>
            <br />
            Hot spot
          </FeatureTab>
        </FeaturesContainer>

        <div className="features">
          <div className="features__content features__content--1 features__content--active">
            <h1>Go anywhere</h1>
            <input
              type="text"
              className="ride--form"
              placeholder="Type pickup location..."
            />
            <input
              type="text"
              className="ride--form"
              placeholder="Type Destination..."
            />
            <a href="./book.html">
              <input
                type="submit"
                value="Hire a RoboTaxi"
                className="form__btn"
              />
            </a>
          </div>
          <div className="features__content features__content--2">
            <h1>Pay anytime with Visa</h1>
            <p>
              Samurai heart. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Omnis id culpa at. Voluptatem incidunt unde ratione ipsum
              nulla aliquid. Exercitationem.
            </p>
            <input
              type="submit"
              value="Hire a RoboTaxi"
              className="form__btn"
            />
          </div>
          <div className="features__content features__content--3">
            <h1>Get a dev job</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium minima architecto voluptatibus ab magni qui fugiat
              nulla, aliquid, debitis beatae unde rerum nihil nostrum voluptatem
              aspernatur quos ea perspiciatis aperiam.
            </p>

            <input
              type="submit"
              value="Hire a RoboTaxi"
              className="form__btn"
            />
          </div>
          <div className="features__content features__content--4">
            <h1>Be loved</h1>
            <p>
              consectetur adipisicing elit. Aspernatur, eos. Illum rem
              consequuntur eos, dolor accusamus corrupti nemo hic consectetur
              atque voluptas ducimus sit dolores.
            </p>
            <input
              type="submit"
              value="Hire a RoboTaxi"
              className="form__btn"
            />
          </div>
        </div>
      </RideFeatures>
    </div>
  );
};

export default Ride;
