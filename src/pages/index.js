import React, { Fragment } from "react"
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
      <Fragment className="m-8">
         <h3 className='text-center'>Today is {month} {date}</h3>
         {this.state.plants.map(plant => 
          <Card key={plant.id} name={plant.name} water={plant.water_after}/>
          )}
          <div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Fragment>
    )
  }
}

export default IndexPage
