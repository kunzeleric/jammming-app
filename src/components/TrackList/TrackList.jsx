/* eslint-disable react/prop-types */
import { Track } from '../Track/Track'
import styles from './TrackList.module.css';


export const TrackList = ({trackList}) => {
  return (
    <div className={styles.tracklistWrapper}>
      <h2 className={styles.tracklistTitle}>Results</h2>
      <div className={styles.tracklistResults}>
        {
          trackList.map((track) => {
            return <Track key={track.id} track={track}/>
          })
        }
      </div>
    </div>
  )
}

