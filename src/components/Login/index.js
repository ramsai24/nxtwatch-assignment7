import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  Div,
  Form,
  LogoImg,
  Input,
  Label,
  ShowPasswordContainer,
  SubmitBtn,
} from './styledComponent'

class Login extends Component {
  state = {username: '', password: '', isChecked: false, errorMsg: ''}

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitLoginCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    console.log(username, password)

    const payload = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
    }
    const call = await fetch(url, options)
    const data = await call.json()
    console.log(data)
    console.log(call)

    if (call.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  usernameUpdate = event => this.setState({username: event.target.value})

  passwordUpdate = event => this.setState({password: event.target.value})

  checkedUpdate = () => this.setState(prev => ({isChecked: !prev.isChecked}))

  render() {
    const {isChecked, username, password, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)
          return (
            <Div bgColor={isDark} colors={isDark}>
              <Form bgColor={isDark} onSubmit={this.submitLoginCredentials}>
                <LogoImg
                  alt="nxt watch logo"
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <Label colors={isDark} htmlFor="username">
                  USERNAME
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.usernameUpdate}
                />
                <Label colors={isDark} htmlFor="password">
                  PASSWORD
                </Label>
                {isChecked ? (
                  <Input
                    id="text"
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={this.passwordUpdate}
                  />
                ) : (
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.passwordUpdate}
                  />
                )}

                <ShowPasswordContainer>
                  <Input
                    type="checkbox"
                    checked={isChecked}
                    onChange={this.checkedUpdate}
                  />
                  <Label colors={isDark}>Show Password</Label>
                </ShowPasswordContainer>
                <p>{errorMsg}</p>
                <SubmitBtn type="submit" onClick={this.submitLoginCredentials}>
                  Login
                </SubmitBtn>

                {/* <button type="button" onClick={themeChange}>
                  button
                </button> */}
              </Form>
              <div>
                <h1>Note</h1>
                <p>
                  Right Now site under construction,Soon i will be back with
                  proper Responsive and CSS Layouts
                </p>
                <h1>Login Credentials</h1>
                <p>username:rahul</p>
                <p>password:rahul@2021</p>
              </div>
            </Div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
