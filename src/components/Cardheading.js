import React from 'react'

export default function Cardhead(props) {
  return (
    <div className={`container cardcont mt-4 text-${props.mode==="light"?"dark":"light"}`}>
      <h2 className='display-5'>{props.cardhead}</h2>
    </div>
  )
}

Cardhead.defaultProps = {
    cardhead: "Cardheading"
  }