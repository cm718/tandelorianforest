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
      <div className="mx-auto container">
        <h4 className="text-xl font-black text-center text-green-600">
          Plants to water on 12/{date}
        </h4>
        {date === 16 ? 
          <div className="flex justify-center md:justify-end">
            <button className="
              bg-green-500 hover:bg-transparent hover:border-green-700
              text-white font-semibold hover:text-green-700 
              py-1 px-2 md:w-32 w-full border border-green-500 
              hover:border-transparent rounded">Next day</button>
          </div> 
            : 
          <div className="flex justify-around md:justify-between">
            <button className="
              bg-transparent hover:bg-green-500 
              text-green-700 font-semibold hover:text-white 
              py-1 px-2 border border-green-500 
              hover:border-transparent rounded">Last Day</button>
            <button className="
              bg-transparent hover:bg-green-500 
              text-green-700 font-semibold hover:text-white 
              py-1 px-2 border border-green-500 
              hover:border-transparent rounded">Next day</button>
          </div>  }
        <div
          className="
          flex
          flex-row 
          flex-wrap
          justify-center
          sm:justify-between"
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
