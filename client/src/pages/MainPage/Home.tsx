import React from "react";
import Header from "../../components/common/Header/Header";
import SearchBar from "../../components/common/SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      <h1 style={{ fontSize: "medium" }}>Go Anyplace, Anywhere, Anytime</h1>
      <SearchBar />
    </div>
  );
};

export default Home;
