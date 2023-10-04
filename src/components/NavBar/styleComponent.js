import styled from 'styled-components'

const dark = theme => {
  console.log(`dark theme ${theme}`)
  if (theme) {
    return '#909090'
  }
  return 'transparent'
}

const light = theme => {
  console.log(`light theme ${theme}`)
  if (theme) {
    return '#cbd5e1'
  }
  return 'transparent'
}

const darkColor = theme => {
  console.log(`dark theme ${theme}`)
  if (theme) {
    return '#ff0b37'
  }
  return '#f4f4f4'
}

const lightColor = theme => {
  console.log(`light theme ${theme}`)
  if (theme) {
    return '#ff0b37'
  }
  return '#212121'
}

export const Div = styled.div`
  width: 300px;

  background-color: ${props =>
    props.isDark ? dark(props.makeRed) : light(props.makeRed)};
  color: ${props => (props.isDark ? '#f4f4f4' : '#212121')};

  display: flex;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  //   border: 1px solid pink;
`

export const Para = styled.p`
  margin: 0px;
`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //   border: 1px solid yellow;
  padding-right: 0px;
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

export const Span = styled.span`
  color: ${props =>
    props.isDark ? darkColor(props.makeRed) : lightColor(props.makeRed)};
`

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
