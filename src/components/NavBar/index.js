import {Link, withRouter} from 'react-router-dom'
import {LiaHotjar} from 'react-icons/lia'
// import {Lia500Px} from 'react-icons/lia'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/nxtWatchContext'
import {Div, LinkPara, Nav, Span} from './styleComponent'
import './index.css'

const Navbar = props => {
  console.log(`props`)
  const {location} = props
  const {pathname} = location
  //   console.log(pathname)

  const h = '/'
  const t = '/trending'
  const g = '/gaming'
  const s = '/saved-videos'

  const home = h === pathname
  console.log(`home: ${home}`)

  const trending = t === pathname
  console.log(`trending: ${trending}`)

  const gaming = g === pathname
  console.log(`gaming: ${gaming}`)

  const saved = s === pathname
  console.log(`saved: ${saved}`)

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isDark,

          updateMakeRed,

          update,
        } = value

        const updates = () => {
          update(pathname)
          updateMakeRed(pathname)
        }
        console.log(isDark)

        return (
          <Nav>
            <Link key="1" className="linkEl" to="/" onClick={updates}>
              <Div isDark={isDark} makeRed={home} pathName={pathname}>
                <Span isDark={isDark} makeRed={home}>
                  <AiFillHome className="icons-color" />
                </Span>

                <LinkPara>Home</LinkPara>
              </Div>
            </Link>
            <Link key="2" className="linkEl" to="/trending" onClick={updates}>
              <Div isDark={isDark} makeRed={trending} pathName={pathname}>
                <Span isDark={isDark} makeRed={trending}>
                  <LiaHotjar className="icons-color" />
                </Span>

                <LinkPara>Trending</LinkPara>
              </Div>
            </Link>

            <Link key="3" className="linkEl" to="/gaming" onClick={updates}>
              <Div isDark={isDark} makeRed={gaming} pathName={pathname}>
                <Span isDark={isDark} makeRed={gaming}>
                  <SiYoutubegaming className="icons-color" />{' '}
                </Span>

                <LinkPara>Gaming</LinkPara>
              </Div>
            </Link>
            <Link
              key="4"
              className="linkEl"
              to="/saved-videos"
              onClick={updates}
            >
              <Div isDark={isDark} makeRed={saved} pathName={pathname}>
                <Span isDark={isDark} makeRed={saved}>
                  <MdPlaylistAdd className="icons-color" />
                </Span>

                <LinkPara>Saved Videos</LinkPara>
              </Div>
            </Link>
          </Nav>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Navbar)

//  {
//           /* const makeRedNavItem = pathList.includes(pathname)
//         console.log(makeRedNavItem) */
//         }
