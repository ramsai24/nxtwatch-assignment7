import styled from 'styled-components'

export const Div = styled.div``

export const HomeContainer = styled(Div)`
  background-color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};
  height: 100vh;
  background-size: cover;
`
export const Img = styled.img``

export const LogoBtn = styled.button``
