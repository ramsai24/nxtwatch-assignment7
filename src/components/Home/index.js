// import Cookies from 'js-cookie'
// import {Link} from 'react-router-dom'
import {
  Div,
  HomeContainer,
  LeftNavAndBannerAndVideosContainer,
  //   BannerAndVideosContainer,
} from './styledComponent'
import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import NxtWatchContext from '../../context/nxtWatchContext'
import PrepaidBanner from '../PrepaidBanner'
import HomeVideoAPIUrl from '../homeVideoAPIUrl'

const Home = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <HomeContainer bgColor={isDark} data-testid="home">
          <Header />

          <LeftNavAndBannerAndVideosContainer>
            <LeftMenuBar />
            <Div>
              <PrepaidBanner />
              <HomeVideoAPIUrl />
            </Div>
          </LeftNavAndBannerAndVideosContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Home
