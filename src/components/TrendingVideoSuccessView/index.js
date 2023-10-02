import {Link} from 'react-router-dom'
import {
  UL,
  Li,

  // RetryBtn, Heading, Img, Para
} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'
import SavedVideoEach from '../SavedVideoEach'

const TrendingVideoSuccessView = props => {
  const {data} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <UL isDark={isDark}>
            {data.map(each => {
              const {id} = each
              return (
                <Link to={`videos/${id}`}>
                  <Li key={each.id}>
                    <SavedVideoEach videoData={each} />
                  </Li>
                </Link>
              )
            })}
          </UL>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoSuccessView
