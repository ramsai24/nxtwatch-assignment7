import {Div, Heading, Img, Para} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

const NotFoundRender = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <Div isDark={isDark}>
          <Img
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <Heading>Page Not Found</Heading>
          <Para>We are sorry, the page you requested could not be found</Para>
        </Div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFoundRender
