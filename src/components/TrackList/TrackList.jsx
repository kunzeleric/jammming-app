/* eslint-disable react/prop-types */
import { Track } from '../Track/Track'
import styles from './TrackList.module.css';


export const TrackList = (props) => {
  return (
    <div className={styles.tracklistWrapper}>
      <h2 className={styles.tracklistTitle}>Results</h2>
      <div className={styles.tracklistResults}>
        {
          props.tracks.map((track) => {
            return (
              <Track
                key={track.id}
                track={track}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                removeHandler={props.removeHandler}
              />
            );
          })
        }
      </div>
    </div>
  )
}

