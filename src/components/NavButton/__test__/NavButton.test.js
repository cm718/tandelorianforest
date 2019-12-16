import React from "react"
import { render } from "@testing-library/react"
import NavButton from "../index.js"

describe("Navigation button renders correctly", () => {
  test("correct button name is passed through props", () => {
    const { container } = render(<NavButton name="Next" />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class=" bg-green-600  text-white font-semibold  py-1 px-2 w-full md:w-32   border border-green-500 hover:bg-green-500  focus:outline-none focus-shadow-outline  rounded"
        >
          Next
           Day
        </button>
      </div>
    `)
  })
})
