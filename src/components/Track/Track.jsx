/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import styles from './Track.module.css';
import { PlusSquare, MinusSquare } from "@phosphor-icons/react";

export const Track = (props) => {

  const addTrack = useCallback(() => {
    props.onAdd(props.track);
  }, [props.onAdd, props.track])

  const removeTrack = useCallback(() => {
    props.onRemove(props.track);
  }, [props.onRemove, props.track])

  const renderButton = () => {
  if(props.removeHandler) {
    return (
    <button className={styles.addIcon} onClick={removeTrack}><MinusSquare size={30} weight="bold" /></button>
    )
  }
  return (
    <button className={styles.addIcon} onClick={addTrack}><PlusSquare size={30} weight="bold" /></button>
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
    {renderButton()}
    </div>
  )
}