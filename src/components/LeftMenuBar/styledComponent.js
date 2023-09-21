import styled from 'styled-components'

export const Div = styled.div``
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Img = styled.img`
  width: 30px;
  margin-top: 10px;
  margin-right: 10px;
`

export const LogoBtn = styled.button``

export const Paragraph = styled.p`
  margin: 0px;
`

export const LeftNavContainer = styled(Div)`
  background-color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 35%;
  border: 1px solid green;
  padding: 20px;
`

export const LinkPara = styled(Paragraph)``

export const ContentPara = styled(Paragraph)`
  font-weight: 700;
`
export const SocialMediaIcons = styled(Div)`
  //   margin-left: 0px;
`
