import React from "react";
import movie5 from "../../assets/imgs/movie-5.jpg";
import movie6 from "../../assets/imgs/movie-6.jpg";
import movie7 from "../../assets/imgs/movie-7.jpg";
import movie8 from "../../assets/imgs/movie-8.jpg";
import movie9 from "../../assets/imgs/movie-9.jpg";
import movie11 from "../../assets/imgs/movie-11.jpg";
import movie12 from "../../assets/imgs/movie-12.jpg";
import movie13 from "../../assets/imgs/movie-13.jpg";
import movie14 from "../../assets/imgs/movie-14.jpg";

import './show-time.css';

export const ShowTime = () => {
  return (
    <div className="show-time container">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link app-line active"
            id="mon-tab"
            data-toggle="tab"
            href="#mon"
            role="tab"
          >
            <span>MON</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link app-line"
            id="tue-tab"
            data-toggle="tab"
            href="#tue"
            role="tab"
          >
            <span>TUE</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link app-line"
            id="wed-tab"
            data-toggle="tab"
            href="#wed"
            role="tab"
          >
            <span>WED</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link app-line"
            id="thu-tab"
            data-toggle="tab"
            href="#thu"
            role="tab"
          >
            <span>THU</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link app-line"
            id="fri-tab"
            data-toggle="tab"
            href="#fri"
            role="tab"
          >
            <span>FRI</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link app-line"
            id="sat-tab"
            data-toggle="tab"
            href="#sat"
            role="tab"
          >
            <span>SAT</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link app-line"
            id="sun-tab"
            data-toggle="tab"
            href="#sun"
            role="tab"
          >
            <span>SUN</span>
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myShowTimeContent">
        <div className="tab-pane fade show active" id="mon" role="tabpanel">
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie5} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie6} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie7} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="tue" role="tabpanel">
        <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie7} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie8} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="wed" role="tabpanel">
        <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie12} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie11} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="thu" role="tabpanel">
        <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie13} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie14} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="fri" role="tabpanel">
        <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie6} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie7} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="sat" role="tabpanel">
        <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie11} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie9} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="sun" role="tabpanel">
        <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie12} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5 show-time-item">
            <div className="col-2">
              <img src={movie8} alt="" className="img-fluid"/>
            </div>
            <div className="col-10">
              <p>ACTION, ADVENTURE, FANTASY</p>
              <h3>Captain America: The First Avenger</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet ratione blanditiis, esse quo culpa ab quisquam modi dolores
                sit?
              </p>
              <p>
                <a href="/">FULL SYNOPSIS</a>
              </p>
              <div className="row">
                <div className="col-9 viewing-time">
                  <span>
                    <i className="fa fa-clock mr-2"></i>
                    VIEWING TIME
                  </span>
                  <div className="show-times">
                    <button className="btn btn-success" disabled>10:30</button>
                    <button className="btn btn-success">12:30</button>
                    <button className="btn btn-success">14:30</button>
                    <button className="btn btn-success">16:30</button>
                  </div>
                </div>
                <div className="col-3 text-right font-weight-bold">
                  105 MINS 15
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
