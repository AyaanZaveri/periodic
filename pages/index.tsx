import React, { useEffect, useState } from 'react'
import Element from '../components/Element'
import axios from 'axios'

const Home = () => {
  const [elementData, setElementData] = useState<any>(null)
  const [showElement, setShowElement] = useState<string>('all')

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
      <div className="grid grid-flow-col gap-5 text-xl">

        <button onClick={() => setShowElement(showElement !== 'diatomic-nonmetal' ? 'diatomic-nonmetal' : "all")} className={`font-medium ${showElement == 'diatomic-nonmetal' ? "text-white p-2 bg-blue-500 rounded" : "text-blue-500"} hover:underline transition-all`}>Diatomic Nonmetal</button>
        <button onClick={() => setShowElement(showElement !== 'alkali-metal' ? 'alkali-metal' : "all")} className={`font-medium ${showElement == 'alkali-metal' ? "text-white p-2 bg-cyan-500 rounded" : "text-cyan-500"} hover:underline transition-all`}>Alkali</button>
        <button onClick={() => setShowElement(showElement !== 'alkaline-earth-metal' ? 'alkaline-earth-metal' : "all")} className={`font-medium ${showElement == 'alkaline-earth-metal' ? "text-white p-2 bg-green-500 rounded" : "text-green-500"} hover:underline transition-all`}>Alkaline Earth</button>
        <button onClick={() => setShowElement(showElement !== 'transition-metal' ? 'transition-metal' : "all")} className={`font-medium ${showElement == 'transition-metal' ? "text-white p-2 bg-orange-500 rounded" : "text-orange-500"} hover:underline transition-all`}>Transition</button>
        <button onClick={() => setShowElement(showElement !== 'post-transition-metal' ? 'post-transition-metal' : "all")} className={`font-medium ${showElement == 'post-transition-metal' ? "text-white p-2 bg-red-500 rounded" : "text-red-500"} hover:underline transition-all`}>Post Transition</button>
        <button onClick={() => setShowElement(showElement !== 'metalloid' ? 'metalloid' : "all")} className={`font-medium ${showElement == 'metalloid' ? "text-white p-2 bg-yellow-500 rounded" : "text-yellow-500"} hover:underline transition-all`}>Metalloid</button>
        <button onClick={() => setShowElement(showElement !== 'polyatomic-nonmetal' ? 'polyatomic-nonmetal' : "all")} className={`font-medium ${showElement == 'polyatomic-nonmetal' ? "text-white p-2 bg-purple-500 rounded" : "text-purple-500"} hover:underline transition-all`}>Polyatomic Nonmetal</button>
        <button onClick={() => setShowElement(showElement !== 'noble-gas' ? 'noble-gas' : "all")} className={`font-medium ${showElement == 'noble-gas' ? "text-white p-2 bg-pink-500 rounded" : "text-pink-500"} hover:underline transition-all`}>Noble Gases</button>
        <button onClick={() => setShowElement(showElement !== 'lanthanide' ? 'lanthanide' : "all")} className={`font-medium ${showElement == 'lanthanide' ? "text-white p-2 bg-indigo-500 rounded" : "text-indigo-500"} hover:underline transition-all`}>Lanthanides</button>
        <button onClick={() => setShowElement(showElement !== 'actinide' ? 'actinide' : "all")} className={`font-medium ${showElement == 'actinide' ? "text-white p-2 bg-teal-500 rounded" : "text-teal-500"} hover:underline transition-all`}>Actinides</button>

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
              showElement={showElement}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
