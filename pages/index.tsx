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

        <button onClick={() => setShowElement('diatomic-nonmetal')} className="font-semibold text-blue-500 hover:underline transition-all">Diatomic Nonmetal</button>
        <button onClick={() => setShowElement('alkali-metal')} className="font-semibold text-cyan-500 hover:underline transition-all">Alkali</button>
        <button onClick={() => setShowElement('alkaline-earth-metal')} className="font-semibold text-green-500 hover:underline transition-all">Alkaline Earth</button>
        <button onClick={() => setShowElement('transition-metal')} className="font-semibold text-orange-500 hover:underline transition-all">Transition</button>
        <button onClick={() => setShowElement('post-transition-metal')} className="font-semibold text-red-500 hover:underline transition-all">Post Transition</button>
        <button onClick={() => setShowElement('metalloid')} className="font-semibold text-yellow-500 hover:underline transition-all">Metalloid</button>
        <button onClick={() => setShowElement('polyatomic-nonmetal')} className="font-semibold text-purple-500 hover:underline transition-all">Polyatomic Nonmetal</button>
        <button onClick={() => setShowElement('noble-gas')} className="font-semibold text-pink-500 hover:underline transition-all">Noble Gases</button>
        <button onClick={() => setShowElement('lanthanide')} className="font-semibold text-indigo-500 hover:underline transition-all">Lanthanides</button>
        <button onClick={() => setShowElement('actinide')} className="font-semibold text-teal-500 hover:underline transition-all">Actinides</button>
        <button onClick={() => setShowElement('unknown')} className="font-semibold text-gray-500 hover:underline transition-all">Unknown</button>

        

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
