import {Component} from 'react'
import NxtWatchContext from '../../context/nxtWatchContext'

class Login extends Component {
  state = {username: '', password: ''}

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)
          return <h1>{isDark} </h1>
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
