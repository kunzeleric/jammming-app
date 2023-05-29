/* eslint-disable react/prop-types */
import { TrackList } from "../TrackList/TrackList"

export const SearchResults = (props) => {
  if (props.isReset) {
    return (<TrackList
      onAdd={props.onAdd}
      tracks={props.searchResults}
    />)
  }

  return null;

}
