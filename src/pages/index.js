import React from "react"
import Card from "../components/card"
import plants from '../data/data.json'

class IndexPage extends React.Component {
  state={
    plants,
    month: "December",
    date: 16
  }
  render(){
    // console.log(this.state); 
    const month = this.state.month;
    const date = this.state.date;
    return(
      <div className="m-8">
         <h3 className='text-center'>Plants to water on {month} {date}</h3>
         <div className='flex-row flex flex-wrap justify-around'>
            {this.state.plants.map(plant => 
              <Card key={plant.id} src={plant.src} name={plant.name} water={plant.water_after}/>
              )}
         </div>
          <div className='text-center mt-5' >Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    )
  }
}

export default IndexPage
