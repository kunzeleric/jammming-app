/* eslint-disable react/prop-types */
import { TrackList } from '../TrackList/TrackList';

export const Playlist = (props) => {
    return (
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        removeHandler={true}
        title={props.title}
      />
    )
  }
