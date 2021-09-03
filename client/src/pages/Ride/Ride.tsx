import React from "react";
import Header from "../../components/common/Header/Header";
import {
  AppPromotion,
  FeatureContent,
  FeaturesContainer,
  FeatureTab,
  RideFeatures,
  ServiceContent,
} from "./styles";
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
          <FeatureContent className="features__content features__content--1 features__content--active">
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
          </FeatureContent>
          <FeatureContent className="features__content features__content--2">
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
          </FeatureContent>
          <FeatureContent className="features__content features__content--3">
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
          </FeatureContent>
          <FeatureContent className="features__content features__content--4">
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
          </FeatureContent>
        </div>
      </RideFeatures>

      {/* <!-- service content --> */}
      <ServiceContent>
        <div className="tesla__services__content">
          <div className="content--text">
            <h2 className="content__header content__1">
              Anywhere, anyplace & anytime
            </h2>
            <p className="content__paragraph">
              Learn about your Tesla ownership experience – including designing
              and taking delivery of your car.
            </p>
            <div className="content__list">
              <a href="a">Request a ride</a>
              <a href="a">Discover your food</a>
              <a href="a">Activate Fully Autonomous Mode</a>
              <a href="a">Find us</a>
            </div>
          </div>
          <div className="content--img">
            <img src="./img/service-1.jpg" alt="" />
          </div>
        </div>

        <div className="tesla__services__content">
          <div className="content--text">
            <h2 className="content__header">Getting Started</h2>
            <p className="content__paragraph">
              Learn about your Tesla ownership experience – including designing
              and taking delivery of your car.
            </p>
            <div className="content__list">
              <a href="a">Tesla RoboTaxi</a>
              <a href="a">Waymo</a>
              <a href="a">Uber</a>
              <a href="a">Lyft</a>
            </div>
          </div>
          <div className="content--img">
            <img src="./img/service-2.jpg" alt="" />
          </div>
        </div>
      </ServiceContent>

      {/* Promote for app download  */}
      <AppPromotion>
        <div className="promote--intro">
          <h2>Tesla App Support</h2>
          <p>
            Download the Tesla app for iPhone and Android to control and
            remotely monitor your Tesla products. You can access features. Use
            your Tesla Account credentials to login.
          </p>
          <div className="promote--intro--store">
            <a href="https://apps.apple.com/us/app/tesla-model-s/id582007913">
              <img
                className="ios-app"
                src="../../assets/Images/app-store.png"
                alt=""
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.teslamotors.tesla&hl=en">
              <img className="android-app" src="./img/google-play.png" alt="" />
            </a>
          </div>
        </div>
        <div className="promote--app">
          <img src="./img/app-hero.jpg" alt="" className="promote--app--img" />
        </div>
      </AppPromotion>
    </div>
  );
};

export default Ride;
