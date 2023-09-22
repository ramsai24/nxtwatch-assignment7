import {Div, RetryBtn, Heading, Img, Para} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

const FailureView = props => {
  const {onRetry} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Div isDark={isDark}>
            <Img
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <Heading>Oops! Something Went Wrong</Heading>
            <Para>
              We are having some trouble to complete your request <br />
              Please try again
            </Para>
            <RetryBtn type="button" onClick={onRetry}>
              Retry
            </RetryBtn>
          </Div>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
