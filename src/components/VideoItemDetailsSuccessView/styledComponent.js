import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

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

export const Div = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-size: cover;
  height: 100vh;
`

export const VideoDetailsContainer = styled.div`
  border: 5px solid skyblue;
`

export const VideoDetailsContainerViewCountLikeDislikeSave = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  padding: 20px;
`
export const Img = styled.img``

export const Heading = styled.h1`
  border: 1px solid red;
`

export const Para = styled.p``

export const LikePara = styled(Para)`
  margin-left: 5px;
`
export const DisLikePara = styled(LikePara)``

export const SavePara = styled(LikePara)``

export const Dot = styled(BsDot)`
  margin-top: 5px;
  color: red;
  //   font-size: 50px;
`

export const Btn = styled.button``

export const LikeAndDisLikeSaveBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => {
    switch (props.checked) {
      case true:
        return '#4f46e5'
      case false:
        return '#000000'
      case '':
        return '#000000'
      default:
        return '#000000'
    }
  }};
`
export const LineBrk = styled.hr``
