import React, { useState, useEffect } from "react"
import Card from "../components/Card"
import plantData from "../data/data.json"
import Button from '../components/NavButton'

const IndexPage = () => {

  const [plants, setPlants] = useState(plantData)
  const [date, setDate] = useState(16)
  const [day, setDay] = useState('Monday')
  const [count, setCount] = useState(0)

  const week = ['Monday', 'Tuesday', 'Wednesday', 
  'Thursday', 'Friday', 'Saturday', 'Sunday']

  const dayChanger = () => {
      setDay(week[count])
  }

  useEffect(() => {
    dayChanger()
  }, [date])

  const handleNavButton = (e) => {
    let name = e.target.innerHTML;
    if(name === "Next Day"){
      setDate(date + 1)
      if(day !== "Sunday"){
        setCount(count + 1)
      } else {
        setCount(0)
      }
    } else {
        setDate(date - 1)
        if(day !== "Monday"){
          setCount(count - 1)
        } else {
          setCount(6)
        }
      }
    }

  //   filterPlants = () => {
  //     // make cleaner varialbes
  //     const today = this.state.date;
  //     const plants = this.state.plants;
  //     console.log(today)
  //     // if the date is greater than 16
  //     if(today !== 16){
  //       let thisDate = today - 16;
  //       const todaysPlants = plants.filter(plant => (thisDate % plant.water_after) === 0)
  //       this.setState({ plants: todaysPlants })
  //     }
  //     // sub 16 and % the water_after data
  //     // if that === 0 then show
  //   }

    return (
      <div className="mx-auto container">
        <div className="my-8 text-xl font-black text-center text-green-600">
          Plants to water on {day} 12/{date}
        </div>

        {
          date === 16 ?
          <div className="flex justify-center md:justify-end">
          <Button handleNavButton={handleNavButton} name='Next' date={date} />
          </div>
          :
          <div className="flex justify-around md:justify-between">
          <Button handleNavButton={handleNavButton} name='Last' date={date} />
          <Button handleNavButton={handleNavButton} name='Next' date={date} />
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
          {plants.map(plant => (
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

export default IndexPage
