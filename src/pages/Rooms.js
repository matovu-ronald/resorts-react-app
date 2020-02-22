import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Aux from "../hoc/Aux";
import RoomContainer from "../components/RoomContainer";

export const Rooms = () => {
  return (
    <Aux>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms" subtitle="Return Home">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </Aux>
  );
};

export default Rooms;
