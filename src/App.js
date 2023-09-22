import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home/index'
import VideoDetails from './components/VideoDetails'
import Trending from './components/Trending'

import NxtwatchContext from './context/nxtWatchContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, selectionLeftMenuNav: ''}

  themeChange = () => {
    this.setState(prev => ({
      isDark: !prev.isDark,
    }))
  }

  updateLeftMenuNav = () => {
    // const {history} = this.props
    // console.log(this.props)
    // this.setState({selectionLeftMenuNav: option})
  }

  render() {
    const {isDark, selectionLeftMenuNav} = this.state
    return (
      <NxtwatchContext.Provider
        value={{
          isDark,
          themeChange: this.themeChange,
          selectionLeftMenuNav,
          updateLeftMenuNav: this.updateLeftMenuNav,
        }}
      >
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoDetails}
              />
            </Switch>
          </BrowserRouter>
        </>
      </NxtwatchContext.Provider>
    )
  }
}

export default App
