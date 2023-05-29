/* eslint-disable react/prop-types */
import styles from './Track.module.css';
import { PlusSquare } from "@phosphor-icons/react";

export const Track = ({ track }) => {
  return (
    <div className={styles.trackWrapper}>
      <div className={styles.trackContainer}>
        <img src={track.album.cover} />
        <div className={styles.trackInfo}>
          <h2 className={styles.song}>{track.title}</h2>
          <p className={styles.artist}>{track.artist.name}</p>
          <span className={styles.album}>{track.album.title}</span>
        </div>
      </div>
      <button className={styles.addIcon}><PlusSquare size={30} weight="bold" /></button>
    </div>
  )
}
