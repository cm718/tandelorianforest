import React from "react"
import Card from "../components/Card"
import plants from "../data/data.json"
import Button from '../components/NavButton'

class IndexPage extends React.Component {
  state = {
    plants,
    date: 16,
  }

  filterPlants = () => {
    // make cleaner varialbes
    const today = this.state.date;
    const plants = this.state.plants;
    console.log(today)
    // if the date is greater than 16
    if(today !== 16){
      let thisDate = today - 16;
      const todaysPlants = plants.filter(plant => (thisDate % plant.water_after) === 0)
      this.setState({ plants: todaysPlants })
    }
    // sub 16 and % the water_after data
    // if that === 0 then show
  }

  handleNavButton = (e) => {
    let name = e.target.innerHTML;
    if(name === "Next Day"){
    this.setState({
      date: this.state.date + 1
    })} else {
    this.setState({
      date: this.state.date - 1
    })
  }
}

  render() {
    // console.log(this.state);
    const date = this.state.date
    return (
      <div className="mx-auto container">
        <div className="my-8 text-xl font-black text-center text-green-600">
          Plants to water on 12/{date}
        </div>

        {
          date === 16 ?
          <div className="flex justify-center md:justify-end">
          <Button handleNavButton={this.handleNavButton} name='Next' date={date} />
          </div>
          :
          <div className="flex justify-around md:justify-between">
          <Button handleNavButton={this.handleNavButton} name='Last' date={date} />
          <Button handleNavButton={this.handleNavButton} name='Next' date={date} />
          </div>
        }
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
