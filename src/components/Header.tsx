import React from 'react'

interface Props{
  heading: string;
}

const Header = ({heading} : Props) => {
  return (
    <div>
      <h1 className="text-center my-3">{heading}</h1>
    </div>
  )
}

export default Header
