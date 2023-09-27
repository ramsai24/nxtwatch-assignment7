import styled from 'styled-components'

export const Div = styled.div`
  color: ${props => (props.bgColor ? '#f4f4f4' : '#212121')};
  display: flex;
  border: 1px solid pink;
`
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
  //   color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};
`

export const LeftNavContainer = styled(Div)`
  background-color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};
  color: ${props => (props.bgColor ? '#212121' : '#f4f4f4')};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
  width: 300px;
  border: 1px solid green;
  padding: 20px;
  flex-shrink: 0;
`

export const LinkPara = styled(Paragraph)``

export const ContentPara = styled(Paragraph)`
  font-weight: 700;
`
export const SocialMediaIcons = styled(Div)`
  //   margin-left: 0px;
`
