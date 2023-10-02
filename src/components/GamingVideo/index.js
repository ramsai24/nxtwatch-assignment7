import {Div, Img, Heading, Para} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

const GamingVideo = props => {
  const {videoData} = props
  //   console.log(videoData)

  const {thumbnailUrl, title, viewCount} = videoData

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Div isDark={isDark}>
            <Img src={thumbnailUrl} alt="thumnail img" />
            <div>
              <div>
                <Heading>{title}</Heading>

                <Para>{viewCount} Watching Worldwide</Para>
              </div>
            </div>
          </Div>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideo
