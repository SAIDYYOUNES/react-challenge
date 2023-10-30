import React from 'react'

export default function Fetch(props) {
  return (
    <div>
    {props.data.map((item,index)=>(<div key={index}><p >{item}</p></div>
    ))}
    </div>
  )
}
