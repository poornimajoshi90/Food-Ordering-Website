import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Explore from "../../components/Explore/Explore";
import FoodDisplay from "../../components/FoodDisplay1/FoodDisplay";
import AppDownload from "../../components/Appdownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Explore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
