import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  font-size: 20px;
`

export const RowDiv = styled(Container)`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
`

export const ColumnDiv = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Img = styled.img`
  width: 400px;
`

export const Heading = styled.h1``

export const Para = styled.p``

export const RetryBtn = styled.button``
