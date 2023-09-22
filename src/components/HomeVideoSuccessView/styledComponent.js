import styled from 'styled-components'

export const Div = styled.div``

export const Img = styled.img``

export const Heading = styled.h1``

export const UL = styled.ul`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  list-style-type: none;
  padding-left: 0px;
  padding: 20px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //   overflow-y: auto;
  border: 5px solid orange;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};

  flex-shrink: 0;
`
export const Li = styled.li`
  width: 350px;
  border: 1px solid pink;
  display: flex;
  flex-direction: column;
`

export const Para = styled.p``

export const RetryBtn = styled.button``
