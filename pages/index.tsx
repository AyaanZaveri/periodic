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
    <div className="grid place-items-center">
      <h1 className="m-8 text-3xl font-semibold text-slate-600">
        Periodic Table of Elements
      </h1>
      <div className="grid grid-flow-col gap-3 text-xl">
        <span className="font-semibold text-blue-500">Diatomic Nonmetals</span>
        <span className="font-semibold text-cyan-500">Alkali</span>
        <span className="font-semibold text-green-500">Alkaline Earth</span>
        <span className="font-semibold text-orange-500">Transition</span>
        <span className="font-semibold text-red-500">Post Transition</span>
        <span className="font-semibold text-yellow-500">Metalloid</span>
        <span className="font-semibold text-purple-500">Polyatomic Nonmetal</span>
        <span className="font-semibold text-pink-500">Noble Gas</span>
        <span className="font-semibold text-indigo-500">Lanthanide</span>
        <span className="font-semibold text-teal-500">Actinide</span>
        <span className="font-semibold text-gray-500">Unknown</span>

        <a href=''><span className="font-semibold text-blue-500">Diatomic Nonmetals</span></a>

      </div>
      <div className="my-12">
        <div
          className="grid grid-flow-row flex-wrap place-content-start"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(18, 1fr))',
            gridGap: '1rem',
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
