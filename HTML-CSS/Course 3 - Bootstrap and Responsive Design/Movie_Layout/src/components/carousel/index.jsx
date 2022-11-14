import React from "react";
import hero1 from "../../assets/imgs/hero-1.jpg";
import hero2 from "../../assets/imgs/hero-2.jpg";
import hero3 from "../../assets/imgs/hero-3.jpg";

import "./carousel.css";

export const Carousel = () => {
  return (
    <div
      id="carouselIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="container carousel-indicators">
        <li
          data-target="#carouselIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={hero1} alt="First slide" />
          <div className="carousel-overlay"></div>
          <div className="container carousel-caption d-none d-md-block">
            <div className="col-9">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h2>End of the World: Part I</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat unde nostrum sed. Facilis beatae quod tempore voluptate
                et nemo ea.
              </p>
              <div className="movie-trailer">
                <span>PG</span>
                <button>
                  <span>
                    <i className="fa fa-play"></i>
                    PLAY TRAILER
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={hero2} alt="Second slide" />
          <div className="carousel-overlay"></div>
          <div className="container carousel-caption d-none d-md-block">
            <div className="col-9">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h2>End of the World: Part II</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat unde nostrum sed. Facilis beatae quod tempore voluptate
                et nemo ea.
              </p>
              <div className="movie-trailer">
                <span>PG</span>
                <button>
                  <span>
                    <i className="fa fa-play"></i>
                    PLAY TRAILER
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={hero3} alt="Third slide" />
          <div className="carousel-overlay"></div>
          <div className="container carousel-caption d-none d-md-block">
            <div className="col-9">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h2>End of the World: Part III</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat unde nostrum sed. Facilis beatae quod tempore voluptate
                et nemo ea.
              </p>
              <div className="movie-trailer">
                <span>PG</span>
                <button>
                  <span>
                    <i className="fa fa-play"></i>
                    PLAY TRAILER
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
