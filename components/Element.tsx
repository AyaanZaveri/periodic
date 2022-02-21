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
        } ${categoryFixed} ml-48 h-32 w-96 rounded-sm bg-slate-50 p-2 shadow-md ring-2 ring-offset-2 transition-all`}
      >
        <div className='grid grid-flow-col'>
          <div className="grid grid-flow-row">
            <span className="text-3xl font-semibold">{symbol}</span>
            <span className="font-normal">{name}</span>
            <span className="grid text-lg font-medium">{number}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Element
