import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {CiLight} from 'react-icons/ci'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  HeaderContainer,
  ProfileImg,
  LogoBtn,
  ThemeBtn,
  TPLContainer,
  LogoutBtn,
  LogoImg,
} from './styledComponent'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, themeChange} = value

      const toHome = () => {
        const {history} = props
        history.replace('/')
      }

      const onLogout = () => {
        const {history} = props

        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={isDark}>
          <LogoBtn type="button" onClick={toHome}>
            {isDark ? (
              <LogoImg
                alt="nxt watch logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              />
            ) : (
              <LogoImg
                alt="nxt watch logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              />
            )}
          </LogoBtn>
          <TPLContainer>
            <ThemeBtn type="button" onClick={themeChange}>
              {isDark ? (
                <CiLight
                  style={{
                    color: ' #ffffff',
                    fontSize: '30px',
                    fontWeight: '900',
                  }}
                  className="light-mode"
                />
              ) : (
                <FaMoon style={{fontSize: '30px'}} />
              )}
            </ThemeBtn>
            <ThemeBtn>
              <ProfileImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
            </ThemeBtn>
            <LogoutBtn isDark={isDark} type="button" onClick={onLogout}>
              Logout
            </LogoutBtn>
          </TPLContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
