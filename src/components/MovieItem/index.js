import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {eachMovieItem} = props
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button">
            <img
              src={eachMovieItem.thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-image"
            />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="button-container">
              <button
                type="button"
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
            <div>
              <ReactPlayer url={eachMovieItem.videoUrl} width="100%" />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
