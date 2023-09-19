import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './components/Login'
import NxtwatchContext from './context/nxtWatchContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  themeChange = () => {
    this.setState(prev => ({
      isDark: !prev.isDark,
    }))
  }

  render() {
    const {isDark} = this.state
    return (
      <NxtwatchContext.Provider value={{isDark, themeChange: this.themeChange}}>
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </>
      </NxtwatchContext.Provider>
    )
  }
}

export default App
