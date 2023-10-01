import {Div, Heading, Img, Para} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

const NoSearch = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <Div isDark={isDark}>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Heading>No saved videos found</Heading>
          <Para>You can save your videos while watching them</Para>
        </Div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NoSearch
