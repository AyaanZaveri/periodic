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
      className={`grid ${category.replace(/\s/g , "-").replace(/,/g, ' ')} h-[4.5rem] w-16 cursor-pointer grid-rows-3 rounded shadow-2xl ring-2 ring-offset-2 transition-all`}
    >
      <span className="ml-1 text-sm">{number}</span>
      <span className="grid place-content-center text-2xl">{symbol}</span>
      <span className="grid place-content-center text-[0.6rem]">{name}</span>
    </div>
  )
}

export default Element
