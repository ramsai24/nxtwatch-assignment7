import {Component} from 'react'
import NxtWatchContext from '../../context/nxtWatchContext'
import {Div, Form, LogoImg, Input, Label} from './styledComponent'

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
                <Input type="text" placeholder="Username" />
                <Label color={isDark} htmlFor="username">
                  PASSWORD
                </Label>
                <Input type="text" placeholder="Password" />

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
