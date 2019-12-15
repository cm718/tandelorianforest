import React, { useState, useEffect } from "react"
import Card from "../components/Card"
import plantData from "../data/data.json"
import Button from "../components/NavButton"

const IndexPage = () => {
  // initial plant data set to state
  const [plants, setPlants] = useState(plantData)
  // setting the date to start on the 16th
  const [date, setDate] = useState(16)
  // setting a counter so I know when to water the plants
  const [count, setCount] = useState(0)
  // days of the week
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  // setting the initial day to Monday
  const [dayIndex, setDayIndex] = useState(0)
  const [day, setDay] = useState(week[dayIndex])

  // months in a year and days in each month
  const months = [
    {monthName: "January", days: 31},
    {monthName: "February", days: 29},
    {monthName: "March", days: 31},
    {monthName: "April", days: 30},
    {monthName: "May", days: 31},
    {monthName: "June", days: 30},
    {monthName: "July", days: 31},
    {monthName: "August", days: 31},
    {monthName: "September", days: 30},
    {monthName: "October", days: 31},
    {monthName: "November", days: 30},
    {monthName: "December", days: 31}
  ]
  // setting the initial month to December per specs
  const [monthIndex, setMonthIndex] = useState(11)
  const [month, setMonth] = useState(months[monthIndex].monthName)


  /* 
  watches for when the date changes 
  to run day changer and plant filter functions 
  */
  useEffect(() => {
    const dayChanger = () => {
      setDay(week[dayIndex])
      setMonth(months[monthIndex].monthName)
    }
    const filterPlants = () => {
      const filteredPlantArr = plantData.filter(
        plant => count % +plant.water_after.split(" ")[0] === 0
      )
      if (date === 16 && month === 'December') {
        setPlants(plantData)
      } else {
        setPlants(filteredPlantArr)
      }
    }
    dayChanger()
    filterPlants()
  }, [date])
  
  useEffect(() => {
    const filterWeekend = () => {
      // if it's friday return a new array with count + 1
      if (day === "Friday") {
        const wkndPlnts = plantData.filter(
          plant => (count + 1) % +plant.water_after.split(" ")[0] === 0
        )
        setWeekendPlants(wkndPlnts)
      } 
      if (day === 'Monday' && date === 16 && month === 'December') {
        return null
      } 
      
      if (day === 'Monday') {
        // if it's Monday return a new array with count - 1
        const wkndPlnts = plantData.filter(
          plant => (count - 1) % +plant.water_after.split(" ")[0] === 0
        )
        setWeekendPlants(wkndPlnts)
      }
    }
    filterWeekend()
  }, [day])

  const handleNavButton = e => {
    let {monthName, days: daysPerMonth } = months[monthIndex]
    let name = e.target.innerHTML
    if (name === "Next Day") {
      setCount(count + 1)
      
      // sets the day of the week
      if (day !== "Sunday") {
        // if we are not at the end of the week
        // advance to the next day
        setDayIndex(dayIndex + 1)
      } else {
        // if we are on Sunday go to Monday
        setDayIndex(0)
      }

      // set the monthName and monthIndex
      if (date < daysPerMonth) {
        setDate(date + 1)
      } else {
        setDate(1)
        if (monthName !== 'December' ) {
          setMonthIndex(monthIndex + 1)
        } else {
          setMonthIndex(0)
        }
      }
    } else { // if user clicks Last Day
      setCount(count - 1)
      
      // sets the day of the week
      if (day !== "Monday") {
        setDayIndex(dayIndex - 1)
      } else {
        setDayIndex(6)
      }

      // set the monthName and monthIndex
      if (date > 1){
        setDate(date - 1)
      } else {
        if (monthName !== "January") {
          setMonthIndex(monthIndex - 1)
          setDate(months[monthIndex-1].days)
        } else {
          setMonthIndex(11)
          setDate(31)
        }
      }
    }
  }

  return (
    <div className="mx-auto container">
      <div className="my-10 text-xl font-black text-center text-green-600">
        {day}, {month} {date}
      </div>
      <div className="mb-4 text-lg font-black text-center text-green-500">
        Plants to water today
      </div>

      {month === 'December' && date === 16 ? (
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
      <h6 className="text-center mt-8 mb-2 text-xs">
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
