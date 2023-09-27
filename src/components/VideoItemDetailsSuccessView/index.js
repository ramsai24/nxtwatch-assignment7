import {Component} from 'react'
import ReactPlayer from 'react-player'
// import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/nxtWatchContext'

import {
  Div,
  //   Container,
  RowDiv,
  //   ColumnDiv,
  VideoDetailsContainer,
  VideoDetailsContainerViewCountLikeDislikeSave,
  //   RetryBtn,
  Heading,
  LikeAndDisLikeSaveBtn,
  //   Img,
  Para,
  LikePara,
  DisLikePara,
  SavePara,
  Dot,
  LineBrk,
} from './styledComponent'

import './index.css'

class VideoItemDetailsSuccessView extends Component {
  render() {
    const {data, isLike, isDisLike, like, disLike, save} = this.props
    console.log(`like ${like}`)
    console.log(`Dislike ${disLike}`)
    // console.log(!like)

    //   let checked = ''
    // console.log(data)
    const {
      id,
      title,
      videoUrl,
      //   thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = data
    //   console.log(videoUrl)
    // console.log(`saved :${saved}`)

    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, updateSavedVideosList, savedVideosList} = value

          const isSave = savedVideosList.some(each => each.id === id)

          const isSaved = () => {
            updateSavedVideosList(data, id)

            if (isSave) {
              save(false)
            } else {
              save(true)
            }
          }

          return (
            <Div isDark={isDark}>
              {/* <ReactPlayerContainer> */}
              <ReactPlayer
                //   className="video"
                width="100%"
                //   style={{width: '100%'}}
                url={videoUrl}
                controls
              />
              {/* </ReactPlayerContainer> */}
              <VideoDetailsContainer>
                <Heading>{title}</Heading>
                <VideoDetailsContainerViewCountLikeDislikeSave justify="space-between">
                  <RowDiv>
                    <Para>{viewCount} views</Para>
                    <Dot />
                    <Para>{formatDistanceToNow(new Date(publishedAt))}</Para>
                  </RowDiv>
                  <RowDiv>
                    <LikeAndDisLikeSaveBtn
                      type="button"
                      checked={like}
                      onClick={isLike}
                    >
                      <RowDiv>
                        <BiLike />
                        <LikePara>Like</LikePara>
                      </RowDiv>
                    </LikeAndDisLikeSaveBtn>
                    <LikeAndDisLikeSaveBtn
                      type="button"
                      checked={disLike}
                      onClick={isDisLike}
                    >
                      <RowDiv>
                        <BiDislike />
                        <DisLikePara>DisLike</DisLikePara>
                      </RowDiv>
                    </LikeAndDisLikeSaveBtn>
                    <LikeAndDisLikeSaveBtn
                      type="button"
                      onClick={isSaved}
                      checked={isSave}
                    >
                      <RowDiv>
                        <MdPlaylistAdd />

                        <SavePara>Save</SavePara>
                      </RowDiv>
                    </LikeAndDisLikeSaveBtn>
                  </RowDiv>
                </VideoDetailsContainerViewCountLikeDislikeSave>
              </VideoDetailsContainer>
              <LineBrk />
              <RowDiv>
                <img src={profileImageUrl} alt="profile img" />
                <div>
                  <Heading>{name}</Heading>
                  <Para>{subscriberCount} subscribers</Para>
                  <Para>{description}</Para>
                </div>
              </RowDiv>
            </Div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetailsSuccessView
// {
//   /*
//             if (isSave) {
//               const filterList = savedVideosList.filter(each => each.id !== id)
//               updateSavedVideosList(filterList)
//               save(false)
//             } else { */
// }

// {
//   /* } */
// }
