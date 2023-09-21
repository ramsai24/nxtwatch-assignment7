import styled from 'styled-components'

export const Div = styled.div`
  flex-grow: 1;
`

export const HomeContainer = styled(Div)`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  height: 100vh;
  background-size: cover;
  border: 2px solid orange;
`
export const LeftNavAndBannerAndVideosContainer = styled(Div)`
  display: flex;
  align-items: flex-start;
`

export const BannerAndVideosContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 3px solid violet;
  width: 100%;
`

export const Img = styled.img``

export const LogoBtn = styled.button``
