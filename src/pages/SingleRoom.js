import React, { Component } from "react";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";

import defaulBcg from "../images/room-1.jpeg";
import { FaWizardsOfTheCoast } from "react-icons/fa";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaulBcg
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found!</h3>
          <Link to="/rooms" className="btn-primary">
            Bact to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    // Desstructuring the images array to remove the displayed hero image
    const [mainImg, ...otherImages] = images;

    return (
        <>
            <StyledHero img={mainImg || this.state.defaulBcg}>
                <Banner title={`${name} room`}> 
                    <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {otherImages.map((image, index) => {
                        return <img key={index} src={image} alt={name} />
                    })}
                </div>
            </section>
        </>
    )
  }
}
