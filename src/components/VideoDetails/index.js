import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import VideoItemDetailsSuccessView from '../VideoItemDetailsSuccessView'

import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import {
  LeftNavAndBannerAndVideosContainer,
  RightContainer,
} from '../Home/styledComponent'
import {Div} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoDetails extends Component {
  state = {videosDetails: '', status: apiStatusConstant.initial}

  componentDidMount() {
    this.getVideoDetails()
  }

  channelSnakeToCammel = a => {
    console.log(a)
  }
  //   ({
  //       console.log(a)
  //     name: a.name,
  //     profileImageUrl: a.profile_image_url,
  //     subscriberCount: a.subscriber_count,
  //   })

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({status: apiStatusConstant.loading})

    const {search} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const dataVideoDetails = await response.json()
    console.log(dataVideoDetails)

    const data = dataVideoDetails.video_details

    if (response.ok) {
      const dataUpdated = {
        id: data.id,
        title: data.title,
        videoUrl: data.video_url,
        thumbnailUrl: data.thumnail_url,
        channel: this.channelSnakeToCammel(data.channel),
        viewCount: data.view_count,
        publishedAt: data.published_at,
        description: data.description,
      }

      console.log(dataUpdated)

      this.setState({
        videosDetails: dataUpdated,
        status: apiStatusConstant.success,
      })
    } else {
      this.setState({status: apiStatusConstant.failure})
    }
  }

  onRetry = () => {
    this.getVideoDetails()
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
    const {videosDetails} = this.state
    console.log(videosDetails)
    return <VideoItemDetailsSuccessView data={videosDetails} />
  }

  renderView = () => {
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
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <Div isDark={isDark}>
              <Header />
              <LeftNavAndBannerAndVideosContainer>
                <LeftMenuBar />
                <RightContainer>{this.renderView()}</RightContainer>
              </LeftNavAndBannerAndVideosContainer>
            </Div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetails
