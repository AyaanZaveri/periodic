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
        <a href='https://en.wikipedia.org/wiki/Nonmetal' target="_blank"><span className="font-semibold text-blue-500 hover:underline transition-all">Diatomic Nonmetals</span></a>
        <a href='https://en.wikipedia.org/wiki/Alkali' target="_blank"><span className="font-semibold text-cyan-500 hover:underline transition-all">Alkali</span></a>
        <a href='https://en.wikipedia.org/wiki/Alkaline_earth_metal' target="_blank"><span className="font-semibold text-green-500 hover:underline transition-all">Alkaline Earth</span></a>
        <a href='https://en.wikipedia.org/wiki/Transition_metal' target="_blank"><span className="font-semibold text-orange-500 hover:underline transition-all">Transition</span></a>
        <a href='https://en.wikipedia.org/wiki/Post-transition_metal' target="_blank"><span className="font-semibold text-red-500 hover:underline transition-all">Post Transition</span></a>
        <a href='https://en.wikipedia.org/wiki/Metalloid' target="_blank"><span className="font-semibold text-yellow-500 hover:underline transition-all">Metalloid</span></a>
        <a href='https://en.wikipedia.org/wiki/Polyatomic_nonmetal' target="_blank"><span className="font-semibold text-purple-500 hover:underline transition-all">Polyatomic Nonmetal</span></a>
        <a href='https://en.wikipedia.org/wiki/Noble_gas' target="_blank"><span className="font-semibold text-pink-500 hover:underline transition-all">Noble Gas</span></a>
        <a href='https://en.wikipedia.org/wiki/Lanthanide' target="_blank"><span className="font-semibold text-indigo-500 hover:underline transition-all">Lanthanide</span></a>
        <a href='https://en.wikipedia.org/wiki/Actinide' target="_blank"><span className="font-semibold text-teal-500 hover:underline transition-all">Actinide</span></a>
        <span className="font-semibold text-gray-500">Unknown</span>

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
              summary={element.summary}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
