import {Redirect} from 'react-router-dom'
import nxtWatchContext from '../../context/nxtWatchContext'
import {Div, Img, LogoBtn} from './styledComponent'

const Header = () => (
  <nxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      const toHome = () => <Redirect to="/" />

      return (
        <Div>
          <LogoBtn type="button" onClick={toHome}>
            {isDark ? (
              <Img
                alt="nxt watch logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              />
            ) : (
              <Img
                alt="nxt watch logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              />
            )}
          </LogoBtn>
        </Div>
      )
    }}
  </nxtWatchContext.Consumer>
)

export default Header
