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

  const home = '/' === pathname
  console.log(`home: ${home}`)

  const trending = '/trending' === pathname
  console.log(`trending: ${trending}`)

  const gaming = '/gaming' === pathname
  console.log(`gaming: ${gaming}`)

  const saved = '/saved-videos' === pathname
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

        return (
          <Nav>
            <Link key="1" className="linkEl" to="/" onClick={updates}>
              <Div bgColor={isDark} makeRed={home} pathName={pathname}>
                <Span>
                  <AiFillHome className="icons-color" />
                </Span>

                <LinkPara>Home</LinkPara>
              </Div>
            </Link>
            <Link key="2" className="linkEl" to="/trending" onClick={updates}>
              <Div bgColor={isDark} makeRed={trending} pathName={pathname}>
                <Span>
                  <LiaHotjar className="icons-color" />
                </Span>

                <LinkPara>Trending</LinkPara>
              </Div>
            </Link>

            <Link key="3" className="linkEl" to="/gaming" onClick={updates}>
              <Div bgColor={isDark} makeRed={gaming} pathName={pathname}>
                <Span>
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
              <Div bgColor={isDark} makeRed={saved} pathName={pathname}>
                <Span>
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
