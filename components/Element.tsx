import React, { useState } from 'react'

const Element = ({
  number,
  symbol,
  name,
  category,
  xpos,
  ypos,
  summary,
  showElement,
  atomic_mass,
  boil,
  density,
  melt,
  molar_heat,
  shells,
  appearance,
  show,
  setShow,
}: {
  number: number
  symbol: string
  name: string
  category: string
  xpos: number
  ypos: number
  summary: string
  showElement: string
  atomic_mass: number
  boil: number
  density: number
  melt: number
  molar_heat: number
  shells: number[]
  appearance: string
  show: string
  setShow: (show: string) => void
}) => {
  const categoryFixed = category.replace(/\s/g, '-').replace(/,/g, ' ')

  return (
    <>
      <div
        id={name}
        className={`grid ${
          showElement == 'all'
            ? categoryFixed
            : showElement == categoryFixed
            ? categoryFixed
            : 'unknown'
        } h-16 w-16 cursor-pointer grid-rows-3 rounded-sm px-1 shadow-2xl ring-2 ring-offset-2 transition-all`}
        style={{
          gridColumn: xpos,
          gridRow: ypos,
        }}
        onClick={() => setShow(show == symbol ? 'none' : symbol)}
      >
        <span className="text-sm">{number}</span>
        <span className="grid place-content-center text-2xl">{symbol}</span>
        <span
          className="m-0.5 grid text-[0.5rem]"
          style={{
            placeItems: 'end start',
          }}
        >
          {name}
        </span>
      </div>
      <div
        className={`${
          show == symbol ? 'absolute' : 'hidden'
        } ${categoryFixed} ml-48 h-48 w-96 overflow-y-scroll rounded-sm bg-slate-50 p-2 shadow-md ring-2 ring-offset-2 transition-all`}
      >
        <div className="grid grid-flow-col justify-between">
          <div className="grid grid-flow-row place-content-start">
            <span className="text-3xl font-semibold">{symbol}</span>
            <span className="font-normal">{name}</span>
            <span className="font-medium capitalize">{category}</span>
            <span className="mt-2 text-sm">{summary}</span>
          </div>
          <div className="grid grid-flow-row place-content-start text-right">
            <span className="text-sm font-normal capitalize">
              <span className="font-medium">Appearance:</span> {appearance}
            </span>
            <span className="text-sm font-normal">
              <span className="font-medium">Atomic Mass:</span> {atomic_mass}
            </span>
            <span className="text-sm font-normal">
              <span className="font-medium">Boiling Point:</span> {boil}
            </span>
            <span className="text-sm font-normal">
              <span className="font-medium">Density:</span> {density}
            </span>
            <span className="text-sm font-normal">
              <span className="font-medium">Melting Point:</span> {melt}
            </span>
            <span className="text-sm font-normal">
              <span className="font-medium">Molar Heat:</span> {molar_heat}
            </span>
            <span className="text-sm font-normal">
              <span className="font-medium">Number of Shells:</span>{' '}
              {shells.join(',')}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Element
