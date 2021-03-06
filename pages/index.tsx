import React, { useEffect, useState } from 'react'
import Element from '../components/Element'
import axios from 'axios'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

const Home = () => {
  const [elementData, setElementData] = useState<any>(null)
  const [showElement, setShowElement] = useState<string>('all')
  const [darkMode, setDarkMode] = useState<boolean>(false)

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

  const checkDarkMode = () => {
    setDarkMode(!darkMode)

    if (darkMode) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode])

  console.log(elementData)

  const [show, setShow] = useState('none')

  return (
    <div className="grid place-items-center">
      <div className="grid w-full grid-flow-col grid-cols-3">
        <h1 className="col-start-2 m-8 grid place-content-center text-3xl font-semibold text-slate-600 dark:text-white">
          Periodic Table of Elements
        </h1>
        <button
          className="col-start-3 m-8 grid"
          onClick={() => checkDarkMode()}
          style={{
            placeItems: 'center end',
          }}
        >
          {darkMode ? (
            <HiOutlineMoon className="h-8 w-8 text-slate-600" />
          ) : (
            <HiOutlineSun className="h-8 w-8 text-white" />
          )}
        </button>
      </div>
      <div className="grid grid-flow-col gap-5 text-xl">
        <button
          onClick={() =>
            setShowElement(
              showElement !== 'diatomic-nonmetal' ? 'diatomic-nonmetal' : 'all'
            )
          }
          className={`text-lg font-medium ${
            showElement == 'diatomic-nonmetal'
              ? 'rounded bg-blue-500 p-2 text-white'
              : 'text-blue-500'
          } transition-all hover:underline`}
        >
          Diatomic Nonmetal
        </button>
        <button
          onClick={() =>
            setShowElement(
              showElement !== 'alkali-metal' ? 'alkali-metal' : 'all'
            )
          }
          className={`text-lg font-medium ${
            showElement == 'alkali-metal'
              ? 'rounded bg-cyan-500 p-2 text-white'
              : 'text-cyan-500'
          } transition-all hover:underline`}
        >
          Alkali
        </button>
        <button
          onClick={() =>
            setShowElement(
              showElement !== 'alkaline-earth-metal'
                ? 'alkaline-earth-metal'
                : 'all'
            )
          }
          className={`text-lg font-medium ${
            showElement == 'alkaline-earth-metal'
              ? 'rounded bg-green-500 p-2 text-white'
              : 'text-green-500'
          } transition-all hover:underline`}
        >
          Alkaline Earth
        </button>
        <button
          onClick={() =>
            setShowElement(
              showElement !== 'transition-metal' ? 'transition-metal' : 'all'
            )
          }
          className={`text-lg font-medium ${
            showElement == 'transition-metal'
              ? 'rounded bg-orange-500 p-2 text-white'
              : 'text-orange-500'
          } transition-all hover:underline`}
        >
          Transition
        </button>
        <button
          onClick={() =>
            setShowElement(
              showElement !== 'post-transition-metal'
                ? 'post-transition-metal'
                : 'all'
            )
          }
          className={`text-lg font-medium ${
            showElement == 'post-transition-metal'
              ? 'rounded bg-red-500 p-2 text-white'
              : 'text-red-500'
          } transition-all hover:underline`}
        >
          Post Transition
        </button>
        <button
          onClick={() =>
            setShowElement(showElement !== 'metalloid' ? 'metalloid' : 'all')
          }
          className={`text-lg text-lg font-medium ${
            showElement == 'metalloid'
              ? 'rounded bg-yellow-500 p-2 text-white'
              : 'text-yellow-500'
          } transition-all hover:underline`}
        >
          Metalloid
        </button>
        <button
          onClick={() =>
            setShowElement(
              showElement !== 'polyatomic-nonmetal'
                ? 'polyatomic-nonmetal'
                : 'all'
            )
          }
          className={`text-lg font-medium ${
            showElement == 'polyatomic-nonmetal'
              ? 'rounded bg-purple-500 p-2 text-white'
              : 'text-purple-500'
          } transition-all hover:underline`}
        >
          Polyatomic Nonmetal
        </button>
        <button
          onClick={() =>
            setShowElement(showElement !== 'noble-gas' ? 'noble-gas' : 'all')
          }
          className={`text-lg font-medium ${
            showElement == 'noble-gas'
              ? 'rounded bg-pink-500 p-2 text-white'
              : 'text-pink-500'
          } transition-all hover:underline`}
        >
          Noble Gases
        </button>
        <button
          onClick={() =>
            setShowElement(showElement !== 'lanthanide' ? 'lanthanide' : 'all')
          }
          className={`text-lg font-medium ${
            showElement == 'lanthanide'
              ? 'rounded bg-indigo-500 p-2 text-white'
              : 'text-indigo-500'
          } transition-all hover:underline`}
        >
          Lanthanides
        </button>
        <button
          onClick={() =>
            setShowElement(showElement !== 'actinide' ? 'actinide' : 'all')
          }
          className={`text-lg font-medium ${
            showElement == 'actinide'
              ? 'rounded bg-teal-500 p-2 text-white'
              : 'text-teal-500'
          } transition-all hover:underline`}
        >
          Actinides
        </button>
      </div>
      <div className="my-12">
        <div
          className="grid grid-flow-row flex-wrap place-content-start"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(18, 1fr))',
            gridGap: '0.8rem',
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
              atomic_mass={element.atomic_mass}
              boil={element.boil}
              density={element.density}
              melt={element.melt}
              molar_heat={element.molar_heat}
              shells={element.shells}
              appearance={element.appearance}
              show={show}
              setShow={setShow}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
