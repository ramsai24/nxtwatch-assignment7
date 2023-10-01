// import Cookies from 'js-cookie'
// import {Link} from 'react-router-dom'
import {
  RightContainer,
  HomeContainer,
  LeftNavAndBannerAndVideosContainer,
  Heading,
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
            <LeftMenuBar />
            <RightContainer isDark={isDark}>
              <Heading>Saved Vidoes</Heading>
              <SavedVideosRendering />
            </RightContainer>
          </LeftNavAndBannerAndVideosContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideo
