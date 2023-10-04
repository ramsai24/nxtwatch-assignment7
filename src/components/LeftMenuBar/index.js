// import {LiaHotjar} from 'react-icons/lia'

// import {AiFillHome} from 'react-icons/ai'
// import {SiYoutubegaming} from 'react-icons/si'
// import {MdPlaylistAdd} from 'react-icons/md'

import {
  // Link,
  withRouter,
} from 'react-router-dom'
import NxtWatchContext from '../../context/nxtWatchContext'
import Navbar from '../NavBar'

import {
  Div,
  Paragraph,
  Img,
  LeftNavContainer,
  //   Nav,
  //   LinkPara,
  ContentPara,
  SocialMediaIcons,
  ContactUsContainer,
} from './styledComponent'
import './index.css'

const LeftMenuBar = props => {
  const {close} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LeftNavContainer bgColor={isDark}>
            {/* <Nav>
            <Link className="linkEl" to="/">
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
            </Link>
          </Nav> */}
            <Navbar close={close} />
            <ContactUsContainer
              bgColor={isDark}
              style={{flexDirection: 'column'}}
            >
              <ContentPara>CONTACT US</ContentPara>
              <SocialMediaIcons>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaIcons>
              <Paragraph className="para">
                Enjoy! Now to see your channels and recommendations!
              </Paragraph>
            </ContactUsContainer>
          </LeftNavContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(LeftMenuBar)
