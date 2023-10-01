import {useState} from 'react'
import {GrClose} from 'react-icons/gr'
import NxtWatchContext from '../../context/nxtWatchContext'
import {PrepaidContainer} from './styledComponent'

const PrepaidBanner = () => {
  const [isClose, setClose] = useState(true)

  const onClose = () => setClose(false)

  return (
    <div>
      {isClose && (
        <NxtWatchContext.Consumer>
          {value => {
            const {isDark} = value

            return (
              <PrepaidContainer isDark={isDark}>
                <div>
                  <img
                    alt="nxt watch logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  />
                  <h1>Buy Nxt Watch Premium prepaid plans with UPI</h1>
                  <button type="button">GET IT NOW</button>
                </div>
                <button type="button" onClick={onClose}>
                  <GrClose />
                </button>
              </PrepaidContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      )}
    </div>
  )
}

export default PrepaidBanner
