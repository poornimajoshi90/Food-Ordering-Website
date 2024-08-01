import React from "react";
import "./Explore.css";
import { menu_list } from "../../assets/assets";

const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore" id="explore">
      <h1>Explore our menu</h1>
      <p className="explore-text">
        Offers individually priced dishes. Diners can mix and match based on
        their preferences.{" "}
      </p>
      <div className="explore-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Explore;
