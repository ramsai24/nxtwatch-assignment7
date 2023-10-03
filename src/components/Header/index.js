import {
  withRouter,
  //  Link
} from 'react-router-dom'
// import {useState} from 'react'
import {FaMoon} from 'react-icons/fa'
import {CiLight} from 'react-icons/ci'
import {GiHamburgerMenu} from 'react-icons/gi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
// import {LiaHotjar} from 'react-icons/lia'

// import {AiFillHome} from 'react-icons/ai'
// import {SiYoutubegaming} from 'react-icons/si'
// import {MdPlaylistAdd} from 'react-icons/md'
import Navbar from '../NavBar'

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
  ProfileImgBtn,
  MenuBtn,
  HamMenuContainer,
  //   LinkPara,
} from './styledComponent'

const Header = props => {
  const toHome = () => {
    const {history} = props
    history.replace('/')
  }
  //   const [navOccurs, onChangeNavOccurs] = useState(false)

  //   const navBarDisplay = () => onChangeNavOccurs(prev => !prev.navOccurs)

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, themeChange} = value

        const onLogout = () => {
          const {history} = props

          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const hamenuList = () => (
          <Popup
            modal
            trigger={
              <MenuBtn isDark={isDark} type="button">
                <GiHamburgerMenu />
              </MenuBtn>
            }
            position={['bottom center']}
          >
            {close => (
              <HamMenuContainer isDark={isDark}>
                <button type="button" className="close" onClick={close}>
                  &times;
                </button>
                {/* <Link className="linkEl" to="/">
                  <Div bgColor={isDark}>
                    <AiFillHome className="icons-color" />
                    <LinkPara>Home</LinkPara>
                  </Div>
                </Link>
                <Link className="linkEl" to="/trending">
                  <Div bgColor={isDark}>
                    <LiaHotjar className="icons-color" />
                    <LinkPara>Trending</LinkPara>
                  </Div>
                </Link>

                <Link className="linkEl" to="/gaming">
                  <Div bgColor={isDark}>
                    <SiYoutubegaming className="icons-color" />{' '}
                    <LinkPara>Gaming</LinkPara>
                  </Div>
                </Link>
                <Link className="linkEl" to="/saved-videos">
                  <Div bgColor={isDark}>
                    <MdPlaylistAdd className="icons-color" />

                    <LinkPara>Saved Videos</LinkPara>
                  </Div>
                </Link> */}
                <Navbar />
              </HamMenuContainer>
            )}
          </Popup>
        )

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
              <ThemeBtn isDark={isDark} type="button" onClick={themeChange}>
                {isDark ? (
                  <CiLight className="light-mode" />
                ) : (
                  <FaMoon className="moon-mode" />
                )}
              </ThemeBtn>
              <ProfileImgBtn>
                <ProfileImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
              </ProfileImgBtn>

              {hamenuList()}

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
}

export default withRouter(Header)
