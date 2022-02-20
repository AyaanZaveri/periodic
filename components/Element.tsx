import React from 'react'

const Element = ({
  number,
  symbol,
  name,
  category,
  xpos,
  ypos,
  summary,
  showElement,
}: {
  number: number
  symbol: string
  name: string
  category: string
  xpos: number
  ypos: number
  summary: string
  showElement: string
}) => {
  const categoryFixed = category.replace(/\s/g, '-').replace(/,/g, ' ')
  return (
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
  )
}

export default Element
