/* eslint-disable react/prop-types */
import { TrackList } from '../TrackList/TrackList';

export const Playlist = (props) => {

  if (props.isTracklistVisible) {
    return (
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        removeHandler={true}
      />
    )
  }

  else {return null}
}
