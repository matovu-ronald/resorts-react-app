import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Services from '../components/Services';
import Aux from '../hoc/Aux';

export const Home = () => {
  return (
    <Aux>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </Aux>
  );
};

export default Home;
