import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {CiLight} from 'react-icons/ci'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import NxtWatchContext from '../../context/nxtWatchContext'
import './index.css'

import {
  HeaderContainer,
  Para,
  Div,
  ProfileImg,
  LogoBtn,
  ThemeBtn,
  TPLContainer,
  LogoutBtn,
  LogoImg,
  PopupInsideContainer,
  CancelBtn,
  ConfirmBtn,
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

      const onPopup = () => (
        <Popup
          modal
          trigger={
            <LogoutBtn type="button" onClick={onLogout}>
              LogOut
            </LogoutBtn>
          }
        >
          {close => (
            <PopupInsideContainer isDark={isDark}>
              <Para>Are you sure, you want to logout</Para>
              <Div>
                <CancelBtn isDark={isDark} type="button" onClick={close}>
                  Cancel
                </CancelBtn>
                <ConfirmBtn type="button" onClick={onLogout}>
                  Confirm
                </ConfirmBtn>
              </Div>
            </PopupInsideContainer>
          )}
        </Popup>
      )

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
            {onPopup()}
            {/* <LogoutBtn isDark={isDark} type="button" onClick={onPopup}>
              Logout
            </LogoutBtn> */}
          </TPLContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
