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
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });

  //Get all the capacity
  let capacities = getUnique(rooms, "capacity");
  // Map to jsx
  capacities = capacities.map((capacity, index) => {
    return (
      <option key={index} value={capacity}>
        {capacity}
      </option>
    );
  });

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
        {/* Room price */}
        <div className="form-group">
          <label htmlFor="price">Room price UGX {price} </label>
          <input
            type="range"
            name="price"
            min={minPrice}
            id="price"
            onChange={handleChange}
            className="form-control"
            max={maxPrice}
            value={price}
          />
        </div>
        {/* End Room price */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="size">Room size </label>
          <div className="">
            <input
              type="number"
              name="minSize"
              id="size"
              onChange={handleChange}
              className="size-input"
              value={minSize}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              onChange={handleChange}
              className="size-input"
              value={maxSize}
            />
          </div>
        </div>
        {/* End size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" onChange={handleChange} checked={breakfast} /> 
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" onChange={handleChange} checked={pets} /> <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* End of extras */}
      </form>
    </section>
  );
};

export default RoomFilter;
