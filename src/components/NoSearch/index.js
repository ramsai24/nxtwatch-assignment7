import {Div, RetryBtn, Heading, Img, Para} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

const NoSearch = props => {
  const {onRetry} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Div isDark={isDark}>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading>No Search results found</Heading>
            <Para>Try different key words or remove search filter</Para>
            <RetryBtn type="button" onClick={onRetry}>
              Retry
            </RetryBtn>
          </Div>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default NoSearch
