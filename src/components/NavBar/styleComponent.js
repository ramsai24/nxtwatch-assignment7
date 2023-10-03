import styled from 'styled-components'

export const Div = styled.div`
  background-color: ${props => (props.makeRed ? '#909090' : 'transparent')};
  color: ${props => (props.bgColor ? '#f4f4f4' : '#212121')};

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  //   border: 1px solid pink;
`

export const Para = styled.p`
  margin: 0px;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

// export const Nav = styled.nav`
//   background-color: ${props => (props.isDark ? '#383838' : '#cccccc')};
//   background-size: cover;
//   width: 400px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
// `

export const LinkPara = styled(Para)``

export const Span = styled.span``

//   background-color: ${props => {
//     const {pathName} = props
//     console.log(pathName)

//     switch (pathName) {
//       case '/':
//         return '#f4f4f4'
//       case '/trending':
//         return '#909090'
//       case '/gaming':
//         return '#909090'
//       case '/saved-videos':
//         return '#909090'

//       default:
//         return 'transparent'
//     }
//   }};
