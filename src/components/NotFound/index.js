// import Cookies from 'js-cookie'
// import {Link} from 'react-router-dom'
import {
  RightContainer,
  HomeContainer,
  LeftNavAndBannerAndVideosContainer,
  //   BannerAndVideosContainer,
} from './styledComponent'
import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'

import NxtWatchContext from '../../context/nxtWatchContext'

import NotFoundRender from '../NotFoundRender'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <HomeContainer bgColor={isDark} data-testid="home">
          <Header />

          <LeftNavAndBannerAndVideosContainer>
            <LeftMenuBar />
            <RightContainer isDark={isDark}>
              <NotFoundRender />
            </RightContainer>
          </LeftNavAndBannerAndVideosContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
