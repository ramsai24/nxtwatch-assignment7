import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/nxtWatchContext'

import {Div} from './styledComponent'

import FailureView from '../FailureView'

import TrendingVideoSuccessView from '../TrendingVideoSuccessView'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class HomeVideoAPIUrl extends Component {
  state = {
    status: apiStatusConstant.initial,
    videosData: '',

    search: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  channelObjectsnakeToCamel = a => ({
    name: a.name,
    profileImageUrl: a.profile_image_url,
  })

  getVideos = async () => {
    this.setState({status: apiStatusConstant.loading})

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/trending`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)

    if (response.ok) {
      const dataUpdated = data.videos.map(each => ({
        channel: this.channelObjectsnakeToCamel(each.channel),
        // .map(a => ({
        //   name: a.name,
        //   profileImageUrl: a.profile_image_url,
        // })),
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      //   console.log(dataUpdated)

      this.setState({
        videosData: dataUpdated,
        status: apiStatusConstant.success,
      })
    } else {
      this.setState({status: apiStatusConstant.failure})
    }
  }

  onSearchValue = value => this.setState({search: value})

  onSearch = () => {
    this.getVideos()
  }

  onRetry = () => {
    this.getVideos()
  }

  renderLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <div className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#f9f9f9' : '#181818'}
              height="50"
              width="50"
            />
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderSuccessView = () => {
    const {videosData} = this.state

    return <TrendingVideoSuccessView data={videosData} />
  }

  renderVideos = () => {
    const {status} = this.state
    switch (status) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return this.renderLoadingView()
    }
  }

  render() {
    const {search} = this.state
    console.log(search)
    return <Div>{this.renderVideos()}</Div>
  }
}
export default HomeVideoAPIUrl
