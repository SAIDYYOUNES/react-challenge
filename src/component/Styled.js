import React from 'react'
import styled from 'styled-components'
import chemch from '../assets/chemch.jpg'

const Image= styled.img`
height : 600px;
weight :100px;`;

export default function Styled() {
  return (
    <div>
<Image src={chemch}  />
    </div>
  )
}
