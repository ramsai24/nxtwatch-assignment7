import {Link} from 'react-router-dom'
import {
  UL,
  Li,

  // RetryBtn, Heading, Img, Para
} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'
import Video from '../Video'

const HomeVideoSuccessView = props => {
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
                <Link key={each.id} to={`videos/${id}`}>
                  <Li key={each.id}>
                    <Video videoData={each} />
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

export default HomeVideoSuccessView
