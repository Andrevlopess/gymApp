import React from 'react'
import styled from 'styled-components'
import { OriginTheme } from '../Themes/OriginTheme'

const HeaderContainer = styled.header`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-family: 'Inter', sans-serif;
`
const Header = () => {
  return (
    <HeaderContainer>
        Andere
    </HeaderContainer>
  )
}

export default Header