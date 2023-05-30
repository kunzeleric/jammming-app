/* eslint-disable react/prop-types */
import { useCallback, useRef, useState } from 'react';
import styles from './Track.module.css';
import { PlusSquare, Trash, PlayPause } from "@phosphor-icons/react";


export const Track = (props) => {

  const musicPlayerRef = useRef(null);
  const btnPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      musicPlayerRef.current.play();
    }
    else {
      setIsPlaying(false);
      musicPlayerRef.current.pause();
    }
  }

  const addTrack = useCallback(() => {
    props.onAdd(props.track);
  }, [props.onAdd, props.track])

  const removeTrack = useCallback(() => {
    props.onRemove(props.track);
  }, [props.onRemove, props.track])

  const renderButton = () => {
    if (props.removeHandler) {
      return (
        <button className={styles.icon} onClick={removeTrack}><Trash size={30} weight="bold" /></button>
      )
    }
    return (
      <button className={styles.icon} onClick={addTrack}><PlusSquare size={30} weight="bold" /></button>
    )
  }

  return (
    <div className={styles.trackWrapper}>
      <div className={styles.trackContainer}>
        <img src={props.track.album.cover} />
        <div className={styles.trackInfo}>
          <h2 className={styles.song}>{props.track.title}</h2>
          <p className={styles.artist}>{props.track.artist.name}</p>
          <span className={styles.album}>{props.track.album.title}</span>
        </div>
      </div>
      <div className={styles.btns}>
        <button ref={btnPlayerRef} className={styles.playerBtn} onClick={playPause}><PlayPause size={25} weight="bold" /></button>
        <audio ref={musicPlayerRef} src={props.track.preview}>
          Your browser does not support the audio element.
        </audio>
        {renderButton()}
      </div>
    </div>
  )
}