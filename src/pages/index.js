import React, { useState, useEffect } from "react"
import Card from "../components/Card"
import plantData from "../data/data.json"
import Button from "../components/NavButton"

const IndexPage = () => {
  const [plants, setPlants] = useState(plantData)
  const [date, setDate] = useState(16)
  const [count, setCount] = useState(0)
  const [day, setDay] = useState("Monday")
  const [month, setMonth] = useState("Dec")
  const [dayIndex, setDayIndex] = useState(0)
  const [monthIndex, setMonthIndex] = useState(0)

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const filterPlants = () => {
    const filteredPlantArr = plantData.filter(
      plant => count % +plant.water_after.split(' ')[0] === 0
    )
    if(date !== 16){
      setPlants(filteredPlantArr)
    } else {
      setPlants(plantData)
    }
  }
  
  useEffect(() => {
    const dayChanger = () => {
      setDay(week[dayIndex])
    }
    dayChanger()
  }, [date])
    
    const handleNavButton = e => {
      let name = e.target.innerHTML
      if (name === "Next Day") {
        setDate(date + 1)
        setCount(count + 1)
        filterPlants()
        if (day !== "Sunday") {
          setDayIndex(dayIndex + 1)
        } else {
          setDayIndex(0)
        }
      } else {
        setDate(date - 1)
        setCount(count -1)
        filterPlants()
        if (day !== "Monday") {
        setDayIndex(dayIndex - 1)
      } else {
        setDayIndex(6)
      }
    }
  }

  return (
    <div className="mx-auto container">
      <div className="my-8 text-xl font-black text-center text-green-600">
        Plants to water on {day} 12/{date}
      </div>

      {date === 16 ? (
        <div className="flex justify-center md:justify-end">
          <Button handleNavButton={handleNavButton} name="Next" date={date} />
        </div>
      ) : (
        <div className="flex justify-around md:justify-between">
          <Button handleNavButton={handleNavButton} name="Last" date={date} />
          <Button handleNavButton={handleNavButton} name="Next" date={date} />
        </div>
      )}
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
