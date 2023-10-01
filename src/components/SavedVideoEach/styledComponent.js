import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  display: flex;

  flex-direction: row;
  padding: 20px;
`

export const RowDiv = styled(Div)`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
`

export const Img = styled.img`
  width: 350px;
`

export const Heading = styled.h1``

export const Para = styled.p``

export const RetryBtn = styled.button``
