import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import {
  LeftNavAndBannerAndVideosContainer,
  RightContainer,
} from '../Home/styledComponent'

const VideoDetails = () => (
  <>
    <Header />
    <LeftNavAndBannerAndVideosContainer>
      <RightContainer>
        <LeftMenuBar />
      </RightContainer>
    </LeftNavAndBannerAndVideosContainer>
  </>
)
export default VideoDetails
