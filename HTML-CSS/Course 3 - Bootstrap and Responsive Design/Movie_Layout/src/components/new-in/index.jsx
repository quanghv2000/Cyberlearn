import React from "react";
import movie1 from "../../assets/imgs/movie-1.jpg";
import movie2 from "../../assets/imgs/movie-2.jpg";
import movie3 from "../../assets/imgs/movie-3.jpg";
import movie4 from "../../assets/imgs/movie-4.jpg";

import "./new-in.css";

export const NewIn = () => {
  return (
    <section className="new-in">
      <div className="container">
        <h2 className="title">New In</h2>
        <div className="new-in-content">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <img className="card-img-top" src={movie1} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">The Last Post</h5>
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img className="card-img-top" src={movie2} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">Dark and Lonely</h5>
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img className="card-img-top" src={movie3} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">Venture</h5>
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img className="card-img-top" src={movie4} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">Hush</h5>
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
