import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {MdOutlineLightMode} from 'react-icons/md'
import NxtWatchContext from '../../context/nxtWatchContext'
import {Div, Img, LogoBtn, ThemeBtn} from './styledComponent'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, themeChange} = value

      const toHome = () => {
        const {history} = props
        history.replace('/')
      }

      return (
        <Div bgColor={isDark}>
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
          <Div>
            <ThemeBtn type="button" onClick={themeChange}>
              {isDark ? <MdOutlineLightMode /> : <FaMoon />}
            </ThemeBtn>
          </Div>
        </Div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
