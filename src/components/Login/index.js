import {Component} from 'react'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  Div,
  Form,
  LogoImg,
  Input,
  Label,
  ShowPasswordContainer,
} from './styledComponent'

class Login extends Component {
  //   state = {username: '', password: ''}

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, themeChange} = value
          console.log(isDark)
          return (
            <Div bgColor={isDark} color={isDark}>
              <Form bgColor={isDark}>
                <LogoImg
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <Label color={isDark} htmlFor="username">
                  USERNAME
                </Label>
                <Input id="username" type="text" placeholder="Username" />
                <Label color={isDark} htmlFor="password">
                  PASSWORD
                </Label>
                <Input id="password" type="text" placeholder="Password" />
                <ShowPasswordContainer>
                  <Input type="checkbox" />
                  <Label color={isDark}>Show Password</Label>
                </ShowPasswordContainer>

                <button type="button" onClick={themeChange}>
                  button
                </button>
              </Form>
            </Div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
