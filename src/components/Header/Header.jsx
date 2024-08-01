import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food</h2>
        <p>
          Tomato is a fantastic platform for ordering food online. They partner
          with a wide variety of restaurants, so you can explore menus from
          local favorites or national chains. Whether you’re craving pizza,
          sushi, or something sweet, Tomato has you covered
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
