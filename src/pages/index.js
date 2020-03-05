import React, { useState, useEffect } from "react"
import Card from "../components/Card"
import plantData from "../data/data.json"
import Title from '../components/Title'
import NavButton from "../components/NavButton"
import CardContainer from '../components/CardContainer'
import Message from '../components/Message'

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
  const [weekendPlants, setWeekendPlants] = useState([])


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
  
  /*
  Effect hook for filtering plants that 
  fall on the weekend days
  */
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
    console.log(name)
    if (name === "Next") {
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
    } 
    if(name === "Last") { // if user clicks Last Day
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
      } 
      if (date === 1) {
        if (monthName !== "January") {
          setMonthIndex(monthIndex - 1)
          setDate(months[monthIndex - 1].days)
        } else {
          setMonthIndex(11)
          setDate(31)
        }
      }
    }
  }

  return (
    <div className="mx-auto container">
      <Title day={day} month={month} date={date} />

      {/* if it is our starting date only display the next button */}
      {month === "December" && date === 16 ? (
        <div className="flex justify-center md:justify-end">
          <NavButton handleNavButton={handleNavButton} name="Next" />
        </div>
      ) : (
        <div className="flex justify-around md:justify-between">
          <NavButton handleNavButton={handleNavButton} name="Last" />
          <NavButton handleNavButton={handleNavButton} name="Next" />
        </div>
      )}

      {/* Display the mapped over cards if there are any*/}
      {(day !== "Saturday" && day !== "Sunday") ? (
        <CardContainer>
          {plants.map(plant => (
            <Card
              key={plant.id}
              src={plant.src}
              name={plant.name}
              water={plant.water_after}
            />
          ))}
        </CardContainer>
      ) : (
        <Message day={day} message="Go enjoy your weekend." />
      )}
      {/* if it is a Friday also show Saturdays plants */}
      {/* if it is a Monday also show Sundays plants */}
      {(day === "Friday" || day === "Monday") && weekendPlants.length > 0 ? (
        <div>
          <div
            className="
          my-10 text-lg font-black text-center text-green-500"
          >
            Plants for {day === "Friday" ? `Saturday` : `Sunday`}
          </div>
          <CardContainer>
            {weekendPlants.map(plant => (
              <Card
                key={plant.id}
                src={plant.src}
                name={plant.name}
                water={plant.water_after}
              />
            ))}
          </CardContainer>
        </div>
      ) : null}
    </div>
  )
}

export default IndexPage
