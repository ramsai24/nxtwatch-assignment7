import styled from 'styled-components'

export const Div = styled.div``

export const HomeContainer = styled(Div)`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};

  background-size: cover;
  border: 2px solid orange;
  height: 100vh;
  //   flex-shrink: 0;
`
export const LeftNavAndBannerAndVideosContainer = styled(Div)`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
`
export const RightContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#f9f9f9')};

  flex-grow: 1;
  overflow: auto;
  height: 90vh;
`

export const BannerAndVideosContainer = styled(Div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 3px solid violet;
  width: 100%;
`
export const Heading = styled.h1``

export const Img = styled.img``

export const LogoBtn = styled.button``
