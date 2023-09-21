// import Cookies from 'js-cookie'
// import {Link} from 'react-router-dom'
import {Div, HomeContainer} from './styledComponent'
import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import NxtWatchContext from '../../context/nxtWatchContext'

const Home = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <HomeContainer bgColor={isDark} data-testid="home">
          <Header />

          <Div>
            <LeftMenuBar />
          </Div>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Home
