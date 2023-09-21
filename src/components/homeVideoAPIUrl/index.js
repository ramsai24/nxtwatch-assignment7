import {Component} from 'react'
import Cookies from 'js-cookie'

import {Div} from './styledComponent'
import SearchComponent from '../searchComponent'

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
    errorMsg: '',
    search: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({status: apiStatusConstant.loading})

    const {search} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${search}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  onSearchValue = value => this.setState({search: value})

  onSearch = () => {
    this.getVideos()
  }

  render() {
    const {search, status} = this.state
    console.log(search)
    return (
      <Div>
        <SearchComponent
          onSearchValue={this.onSearchValue}
          onSearch={this.onSearch}
        />
        <Div>
          <h1>videoComponent</h1>
        </Div>
      </Div>
    )
  }
}
export default HomeVideoAPIUrl
