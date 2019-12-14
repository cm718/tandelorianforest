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
  const months = [
    {monthName: "Jan", days: 31},
    {monthName: "Feb", days: 29},
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
  const [monthIndex, setMonthIndex] = useState(11)
  console.log(monthIndex)
  let testingMonthName = months[monthIndex].monthName
  console.log(typeof(testingMonthName))
  const [month, setMonth] = useState(testingMonthName)
  console.log(month)
  

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]


  useEffect(() => {
    const dayChanger = () => {
      setDay(week[dayIndex])
    }
    const filterPlants = () => {
      const filteredPlantArr = plantData.filter(
        plant => count % +plant.water_after.split(" ")[0] === 0
      )
      if (date === 16 && month === 'Dec') {
        setPlants(plantData)
      } else {
        setPlants(filteredPlantArr)
      }
    }
    dayChanger()
    filterPlants()
  }, [date])

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
        if (monthName !== 'Dec' ) {
          setMonthIndex(monthIndex + 1)
          console.log('advancing month')
        } else {
          setMonthIndex(0)
          console.log('going back to january')
          console.log(`month is ${monthInd}`)
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
        if (monthName !== "Jan") {
          setMonthIndex(monthIndex - 1)
        } else {
          setMonthIndex(11)
        }
      }
    }
  }

  return (
    <div className="mx-auto container">
      <div className="my-10 text-xl font-black text-center text-green-600">
        {day} {month}/{date}
      </div>
      <div className="mb-4 text-lg font-black text-center text-green-500">
        Plants to water today
      </div>

      {month === 'Dec' && date === 16 ? (
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
