import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // Get all unique types
  let types = getUnique(rooms, "type");
  // Add all to unique types
  types = ["all", ...types];
  // Map to jsx
  types = types.map((type, index) => {
      return <option key={index} value={type}>{type}</option>;
  })

  //Get all the capacity
  let capacities = getUnique(rooms, "capacity");
  // Map to jsx
  capacities = capacities.map((capacity, index) => {
      return <option key={index} value={capacity}>{capacity}</option> 
  })


  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* Start of select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type </label>
          <select
            name="type"
            value={type}
            id="type"
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End of select type */}
        {/* Guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests </label>
          <select
            name="capacity"
            value={capacity}
            id="capacity"
            className="form-control"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>
        {/* Guests */}
      </form>
    </section>
  );
};

export default RoomFilter;
