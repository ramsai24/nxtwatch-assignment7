import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-size: cover;
  height: 100vh;
`

export const ReactPlayerContainer = styled.div`
  border: 5px solid skyblue;
`

export const Img = styled.img``

export const Heading = styled.h1`
  border: 1px solid red;
`

export const Para = styled.p``

export const RetryBtn = styled.button``
