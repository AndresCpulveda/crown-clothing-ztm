import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
`
export const LogoLink = styled(NavLink)`
  display: flex;
  place-items: center;
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const LinksContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const Link = styled(NavLink)`
padding: 10px 15px;
text-transform: uppercase;
cursor: pointer;
`
