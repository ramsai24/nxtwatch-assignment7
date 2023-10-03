import {
  BrowserRouter,
  withRouter,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home/index'
import VideoDetails from './components/VideoDetailsAPI'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideo from './components/SavedVideos'
import NotFound from './components/NotFound'

import NxtwatchContext from './context/nxtWatchContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    selectionLeftMenuNav: '',
    savedVideosList: [],
    makeRed: '',
    home: false,
    gaming: false,
    trending: false,
    saved: false,
  }

  themeChange = () => {
    this.setState(prev => ({
      isDark: !prev.isDark,
    }))
  }

  updateSavedVideosList = (videoData, id) => {
    const {savedVideosList} = this.state

    const check = savedVideosList.some(each => each.id === id)

    if (check) {
      const filterList = savedVideosList.filter(each => each.id !== id)
      this.setState({savedVideosList: filterList})
    } else {
      this.setState(prev => ({
        savedVideosList: [...prev.savedVideosList, videoData],
      }))
    }
  }

  updateLeftMenuNav = () => {
    // const {history} = this.props
    // console.log(this.props)
    // this.setState({selectionLeftMenuNav: option})
  }

  updateMakeRed = pathname => {
    // const pathList = ['/', '/trending', '/gaming', '/saved-videos']
    // console.log(this.props)
    // const {location} = this.props
    // const {pathname} = location
    // console.log(pathname)

    // const makeRedBool = pathList.includes(pathname)

    // const {makeRed} = this.state
    // console.log(makeRed)

    switch (pathname) {
      case '/':
        this.setState({
          home: true,
          trending: false,
          gaming: false,
          saved: false,
        })
        break
      case '/trending':
        this.setState({
          trending: true,
          home: false,
          gaming: false,
          saved: false,
        })
        break
      case '/gaming':
        this.setState({
          gaming: true,

          trending: false,
          home: false,
          saved: false,
        })
        break
      case '/saved-videos':
        this.setState({
          saved: true,
          home: false,
          trending: false,
          gaming: false,
        })
        break

      default:
        break
    }

    // this.setState({makeRed: makeRedBool})
  }

  update = pathname => {
    this.setState({makeRed: pathname})
  }

  render() {
    const {
      isDark,
      selectionLeftMenuNav,
      savedVideosList,
      makeRed,
      home,
      trending,
      gaming,
      saved,
    } = this.state
    console.log(savedVideosList)
    return (
      <NxtwatchContext.Provider
        value={{
          isDark,
          themeChange: this.themeChange,
          selectionLeftMenuNav,
          updateLeftMenuNav: this.updateLeftMenuNav,
          savedVideosList,
          updateSavedVideosList: this.updateSavedVideosList,
          pathList: ['/', '/trending', '/gaming', '/saved-videos'],
          makeRed,
          updateMakeRed: this.updateMakeRed,
          update: this.update,
          home,
          trending,
          gaming,
          saved,
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
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideo}
              />
              <Route exact path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </BrowserRouter>
        </>
      </NxtwatchContext.Provider>
    )
  }
}

export default withRouter(App)
