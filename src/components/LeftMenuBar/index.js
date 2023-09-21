// import Cookies from 'js-cookie'

import {LiaHotjar} from 'react-icons/lia'
// import {Lia500Px} from 'react-icons/lia'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
// import {LiaHotjar} from '@react-icons/all-files/lia/LiaHotjar'
import {Link, withRouter} from 'react-router-dom'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  Div,
  Paragraph,
  Img,
  LeftNavContainer,
  Nav,
  LinkPara,
  ContentPara,
  SocialMediaIcons,
} from './styledComponent'
import './index.css'

const LeftMenuBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <LeftNavContainer bgColor={isDark}>
          <Nav>
            <Link className="linkEl" to="/">
              <AiFillHome className="icons-color" />
              <LinkPara>Home</LinkPara>
            </Link>
            <Link className="linkEl" to="/trending">
              <LiaHotjar className="icons-color" />
              <LinkPara>Trending</LinkPara>
            </Link>
            <Link className="linkEl" to="/gaming">
              <SiYoutubegaming className="icons-color" />{' '}
              <LinkPara>Gaming</LinkPara>
            </Link>
            <Link className="linkEl" to="/savedvideos">
              <MdPlaylistAdd className="icons-color" />

              <LinkPara>Saved Videos</LinkPara>
            </Link>
          </Nav>
          <Div>
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
              <Paragraph className="para">
                Enjoy! Now to see your channels and recommendations!
              </Paragraph>
            </SocialMediaIcons>
          </Div>
        </LeftNavContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(LeftMenuBar)
