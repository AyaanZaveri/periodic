import React from 'react'

const Element = ({
  number,
  symbol,
  name,
  category,
  xpos,
  ypos,
}: {
  number: number
  symbol: string
  name: string
  category: string
  xpos: number
  ypos: number
}) => {

  return (
    <div
      id={name}
      className={`grid ${category.replace(/\s/g , "-").replace(/,/g, ' ')} h-16 w-16 px-1 cursor-pointer grid-rows-3 rounded-sm shadow-2xl ring-2 ring-offset-2 transition-all`}
      style={{
        gridColumn: xpos,
        gridRow: ypos,
      }}
    >
      <span className="text-sm">{number}</span>
      <span className="grid place-content-center text-2xl">{symbol}</span>
      <span className="grid text-[0.5rem] m-0.5" style={{
          placeItems: "end start",
      }}>{name}</span>
    </div>
  )
}

export default Element
