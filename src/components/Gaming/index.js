// import Cookies from 'js-cookie'
// import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import GamingVideoAPIUrl from '../GamingVideoAPIUrl'
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

const Gaming = () => (
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
                <SiYoutubegaming />
                Gaming
              </Heading>
              <GamingVideoAPIUrl />
            </RightContainer>
          </LeftNavAndBannerAndVideosContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Gaming
