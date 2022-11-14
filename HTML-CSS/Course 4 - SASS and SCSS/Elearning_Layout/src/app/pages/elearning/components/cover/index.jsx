import React from "react";
import { InputSearch } from "src/app/components/input-search";
import bgCover from "src/assets/imgs/cover.jpg";

import "./cover.scss";

export const Cover = () => {
  return (
    <section className="cover" style={{ backgroundImage: `url(${bgCover})` }}>
      <div className="cover-content">
        <h1>Learn on your schedule</h1>
        <p>
          Study any topic, anytime. Explore thousands of courses for as low as
          <b> $19.99</b>
        </p>
        <form className="cover-content-form">
          <InputSearch />
        </form>
      </div>
    </section>
  );
};
