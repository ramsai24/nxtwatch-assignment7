// import Cookies from 'js-cookie'
// import {Link} from 'react-router-dom'
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

import SavedVideosRendering from '../SavedVideosRendering'

const SavedVideo = () => (
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
              <Heading isDark={isDark}>Saved Vidoes</Heading>
              <SavedVideosRendering />
            </RightContainer>
          </LeftNavAndBannerAndVideosContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideo
