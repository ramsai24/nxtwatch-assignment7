import styled from 'styled-components'

export const Div = styled.div``

export const Para = styled.p``

export const HeaderContainer = styled(Div)`
  background-color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};

  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  padding: 20px;
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
  border: 1px solid yellow;
  display: flex;
  align-items: center;
`

export const Img = styled.img``

export const LogoImg = styled(Img)`
  width: 180px;
`

export const ProfileImg = styled(Img)`
  width: 30px;
`

export const LogoBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin-right: 20px;
`

export const LogoutBtn = styled(LogoBtn)`
  border: 2px solid ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  font-weight: 700;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
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
