import {formatDistanceToNow} from 'date-fns'

import {Div, Img, Heading, Para} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

const Video = props => {
  const {videoData} = props
  console.log(videoData)

  const {channel, publishedAt, thumbnailUrl, title, viewCount} = videoData

  const {name, profileImageUrl} = channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Div isDark={isDark}>
            <Img src={thumbnailUrl} alt="thumnail img" />
            <div>
              <img src={profileImageUrl} alt="profile img" />
              <div>
                <Heading>{title}</Heading>
                <Para>{name}</Para>
                <div>
                  <Para>{viewCount}</Para>
                  <Para>.</Para>
                  <Para>{formatDistanceToNow(new Date(`${publishedAt}`))}</Para>
                </div>
              </div>
            </div>
          </Div>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Video
