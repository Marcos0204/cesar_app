import React from 'react'
import styled from 'styled-components'

import gif from './MiniApeCoinSlow.gif'

const Container = styled.div`
  background-color: red;
  height: 30%;
  width: 30%;
`
const Img = styled.img`
    width: 50%;
    height: 50%;
    @media (min-width: 767px) {
      width: 80%;
    height: 80%;
  }
`
const Gif = () => {
  return (
    <div>
        <Img src={gif} alt='gif'/>
    </div>
  )
}

export default Gif