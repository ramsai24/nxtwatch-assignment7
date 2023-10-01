import {Link} from 'react-router-dom'
import {
  UL,
  Li,

  // RetryBtn, Heading, Img, Para
} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'
import SavedVideoEach from '../SavedVideoEach'
import NoSavedVideos from '../NoSavedVideos'

const SavedVidoesRendering = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, savedVideosList} = value

      return (
        <UL isDark={isDark}>
          {savedVideosList.length !== 0 ? (
            savedVideosList.map(each => {
              const {id} = each
              return (
                <Link to={`videos/${id}`}>
                  <Li key={each.id}>
                    <SavedVideoEach videoData={each} />
                  </Li>
                </Link>
              )
            })
          ) : (
            <NoSavedVideos />
          )}
        </UL>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVidoesRendering
