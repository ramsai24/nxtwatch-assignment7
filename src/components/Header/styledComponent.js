import styled from 'styled-components'

export const Div = styled.div``

export const Para = styled.p``

export const Span = styled.span``

export const HeaderContainer = styled(Div)`
  background-color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};

  display: flex;
  justify-content: space-between;
  //   border: 1px solid blue;
  padding: 20px;
`

export const HamMenuContainer = styled.div`
  background-color: ${props => (props.isDark ? '#383838' : '#cccccc')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-size: cover;
  //   width: 100vw;
  height: 100vh;

  //   height: 500px;
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`

export const PopupInsideContainer = styled.div`
  background-color: ${props => (props.isDark ? '#383838' : '#cccccc')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};

  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`
export const TPLContainer = styled(Div)`
  //   border: 1px solid yellow;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`

export const Img = styled.img``

export const LogoImg = styled(Img)`
  width: 180px;
  @media screen and (max-width: 576px) {
    width: 120px;
  }
`

export const ProfileImg = styled(Img)`
  width: 35px;
`

export const LogoBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`

export const ThemeBtn = styled.button`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  background-color: transparent;
  outline: none;
  border: none;
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    font-size: 30px;
  }
`

export const ProfileImgBtn = styled(ThemeBtn)`
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const MenuBtn = styled(ThemeBtn)`
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const Nav = styled.nav`
  background-color: ${props => (props.isDark ? '#383838' : '#cccccc')};
  background-size: cover;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const LinkPara = styled(Para)``

export const LogoutBtn = styled(LogoBtn)`
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  font-weight: 700;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 120px;
  height: 40px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 30px;
  }
`

export const CancelBtn = styled(LogoutBtn)`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin: 10px;
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;

  color: #ffffff;
  font-weight: 700;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 10px;
`
