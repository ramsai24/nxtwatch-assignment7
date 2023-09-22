import ReactPlayer from 'react-player'

import NxtWatchContext from '../../context/nxtWatchContext'
import {
  Div,
  ReactPlayerContainer,
  //   RetryBtn,
  Heading,
  //   Img,
  //   Para,
} from './styledComponent'

import './index.css'

const VideoItemDetailsSuccessView = props => {
  const {data} = props
  console.log(data)
  const {
    title,
    videoUrl,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
    description,
  } = data
  console.log(videoUrl)

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Div isDark={isDark}>
            {/* <ReactPlayerContainer> */}
            <ReactPlayer
              className="video"
              // width="100%"
              style={{width: '100%'}}
              url={videoUrl}
              controls
            />
            {/* </ReactPlayerContainer> */}

            <Heading>{title}</Heading>
          </Div>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItemDetailsSuccessView
