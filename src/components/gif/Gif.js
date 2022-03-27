import React from 'react'
import styled from 'styled-components'

import gif from './MiniApeCoinSlow.gif'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
    width: 50%;
    height: 50%;
    @media (min-width: 767px) {
      width: 80%;
    height: 80%;
  }
  @media (min-width: 1024px) {
    margin-top: -30px;
    width: 30%;
    height: 30%;
  }
  @media (min-width: 1224px) {
    margin-top: -30px;
    width: 60%;
    height: 60%;
  }
`
const Gif = () => {
  return (
    <Container>
        <Img src={gif} alt='gif'/>
    </Container>
  )
}

export default Gif