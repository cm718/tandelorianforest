import React, { useState, useEffect } from "react"
import Card from "../components/Card"
import plantData from "../data/data.json"
import Button from "../components/NavButton"

const IndexPage = () => {
  const [plants, setPlants] = useState(plantData)
  const [date, setDate] = useState(16)
  const [count, setCount] = useState(0)
  const [day, setDay] = useState("Monday")
  const [dayIndex, setDayIndex] = useState(0)
  // const [month, setMonth] = useState("Dec")
  // const [monthIndex, setMonthIndex] = useState(0)

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
    {monthName: "Jan", days: 31},
    {monthName: "Feb", days: 28},
    {monthName: "Mar", days: 31},
    {monthName: "Apr", days: 30},
    {monthName: "May", days: 31},
    {monthName: "Jun", days: 30},
    {monthName: "Jul", days: 31},
    {monthName: "Aug", days: 31},
    {monthName: "Sep", days: 30},
    {monthName: "Oct", days: 31},
    {monthName: "Nov", days: 30},
    {monthName: "Dec", days: 31}
  ]

  useEffect(() => {
    const dayChanger = () => {
      setDay(week[dayIndex])
    }
    const filterPlants = () => {
      const filteredPlantArr = plantData.filter(
        plant => count % +plant.water_after.split(" ")[0] === 0
      )
      if (date === 16) {
        setPlants(plantData)
      } else {
        setPlants(filteredPlantArr)
      }
    }
    dayChanger()
    filterPlants()
  }, [date])

  const handleNavButton = e => {
    let name = e.target.innerHTML
    if (name === "Next Day") {
      setDate(date + 1)
      setCount(count + 1)

      if (day !== "Sunday") {
        setDayIndex(dayIndex + 1)
      } else {
        setDayIndex(0)
      }
    } else {
      setDate(date - 1)
      setCount(count - 1)

      if (day !== "Monday") {
        setDayIndex(dayIndex - 1)
      } else {
        setDayIndex(6)
      }
    }
  }

  return (
    <div className="mx-auto container">
      <div className="my-10 text-xl font-black text-center text-green-600">
        {day} 12/{date}
      </div>
      <div className="mb-4 text-lg font-black text-center text-green-500">
        Plants to water today
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
