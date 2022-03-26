import React from 'react'
import styled from 'styled-components'

import gif from './MiniApeCoinSlow.gif'

const Img = styled.img`
    width: 100%;
    height: 100%;
`
const Gif = () => {
  return (
    <div>
        <Img src={gif} alt='gif'/>
    </div>
  )
}

export default Gif