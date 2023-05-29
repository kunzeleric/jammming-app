/* eslint-disable react/prop-types */
import { TrackList } from "../TrackList/TrackList"

export const SearchResults = (props) => {
    return (<TrackList
      onAdd={props.onAdd}
      tracks={props.searchResults}
      title={props.title}
    />)
  }
