// import Cookies from 'js-cookie'
// import {Link} from 'react-router-dom'
import {LiaHotjar} from 'react-icons/lia'
import {
  RightContainer,
  HomeContainer,
  LeftNavAndBannerAndVideosContainer,
  Heading,
  LeftNavDiv,
  //   BannerAndVideosContainer,
} from './styledComponent'
import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'

import NxtWatchContext from '../../context/nxtWatchContext'

import TrendingVideoAPIUrl from '../TrendingVideoAPIUrl'

const Trending = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <HomeContainer bgColor={isDark} data-testid="home">
          <Header />

          <LeftNavAndBannerAndVideosContainer>
            <LeftNavDiv>
              <LeftMenuBar />
            </LeftNavDiv>
            <RightContainer isDark={isDark}>
              <Heading isDark={isDark}>
                <LiaHotjar />
                Trending
              </Heading>
              <TrendingVideoAPIUrl />
            </RightContainer>
          </LeftNavAndBannerAndVideosContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Trending
