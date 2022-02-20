import React, { useEffect, useState } from 'react'
import Element from '../components/Element'
import axios from 'axios'

const Home = () => {
  const [elementData, setElementData] = useState<any>(null)

  const elements = () => {
    axios
      .get(
        'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json'
      )
      .then((res) => setElementData(res.data.elements))
  }

  useEffect(() => {
    elements()
  }, [])

  console.log(elementData)

  return (
    <div>
      <h1 className="m-8 grid place-items-center text-3xl font-semibold text-slate-600">
        Periodic Table of Elements
      </h1>
      <div className="mx-8 my-12">
        <div
          className="grid grid-flow-row flex-wrap place-content-start gap-4"
          style={{
            gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
          }}
        >
          {elementData?.map((element: any) => (
            <Element
              number={element.number}
              symbol={element.symbol}
              name={element.name}
              category={element.category}
              xpos={element.xpos}
              ypos={element.ypos}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
