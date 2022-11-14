import React, { Component } from "react";

const cars = [
  {
    id: 1,
    title: "Crystal Black",
    type: "Pearl",
    iconImg: require("./assets/icons/icon-black.jpg"),
    carImg: require("./assets/products/black-car.jpg"),
  },
  {
    id: 2,
    title: "Modern Steel",
    type: "Metallic",
    iconImg: require("./assets/icons/icon-steel.jpg"),
    carImg: require("./assets/products/steel-car.jpg"),
  },
  {
    id: 3,
    title: "Lunar Silver",
    type: "Metallic",
    iconImg: require("./assets/icons/icon-silver.jpg"),
    carImg: require("./assets/products/silver-car.jpg"),
  },
  {
    id: 4,
    title: "Rallye Black",
    type: "Pearl",
    iconImg: require("./assets/icons/icon-red.jpg"),
    carImg: require("./assets/products/red-car.jpg"),
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: {
        id: 1,
        title: "Crystal Black",
        type: "Pearl",
        iconImg: require("./assets/icons/icon-black.jpg"),
        carImg: require("./assets/products/black-car.jpg"),
      },
    };
  }

  handleCarSelected = (carSelected) => {
    this.setState({
      carInfo: carSelected,
    });
  };

  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-7">
            <img
              className="w-100"
              src={this.state.carInfo.carImg}
              alt="car.jpg"
            />
          </div>
          <div className="col-5">
            <div className="card pb-1">
              <div className="card-header text-primary">Exterior Color</div>
              {cars.map((item, index) => {
                return (
                  <div
                    className="card-body p-0 mt-1 ml-1 mr-1"
                    style={{ cursor: "pointer" }}
                    key={index}
                    onClick={() => {
                      this.handleCarSelected(item);
                    }}
                  >
                    <div className="d-flex border border-link p-2">
                      <img
                        style={{ width: 50, height: 50 }}
                        src={item.iconImg}
                        alt=""
                      />
                      <div className="ml-3">
                        <h5>{item.title}</h5>
                        <p className="m-0 p-0">{item.type}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
