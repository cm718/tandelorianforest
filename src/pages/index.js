import React from "react"
import Card from "../components/card"
import plants from "../data/data.json"

class IndexPage extends React.Component {
  state = {
    plants,
    date: 16,
  }
  render() {
    // console.log(this.state);
    const date = this.state.date
    return (
      <div className="m-8 mx-auto container">
        <h4 className="font-black text-center text-green-600">
          Plants to water on 12/{date}
        </h4>
        <div
          className="
          flex-row 
          flex flex-wrap 
          justify-around"
        >
          {this.state.plants.map(plant => (
            <Card
              key={plant.id}
              src={plant.src}
              name={plant.name}
              water={plant.water_after}
            />
          ))}
        </div>
        <h6 className="text-center mt-8">
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/ultimatearm"
            title="ultimatearm"
          >
            ultimatearm
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </h6>
      </div>
    )
  }
}

export default IndexPage
