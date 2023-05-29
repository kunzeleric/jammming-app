import { useState, useEffect, useCallback } from 'react';
import styles from './App.module.css'
import { Deezer } from './util/Deezer'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Playlist } from './components/Playlist/Playlist';
import { SearchResults } from './components/SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  const addTrack = useCallback((track) => {
    if(playlistTracks.some((trackAdded) => trackAdded.id === track.id )){
    return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }, [playlistTracks])

  const removeTrack = useCallback((track) => {
    setPlaylistTracks(playlistTracks.filter((removedTrack) => removedTrack.id !== track.id))
  }, [])

  async function fetchData(searchQuery) {
    const { data } = await Deezer.searchTrack(searchQuery);
    setSearchResults(data);
  }

  useEffect(() => {
    fetchData('eminem');
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>Ja<strong>mmm</strong>ing</h1>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.menu}>
          <h1>Sessão de Busca</h1>
        </div>

        <div className={styles.section}>
          <SimpleBar className={styles.scrollbar}>
            <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          </SimpleBar>
          <SimpleBar className={styles.scrollbar}>
            <Playlist playlistTracks={playlistTracks} onRemove={removeTrack}/>
          </SimpleBar>
        </div>
      </main>
    </>
  )
}

export default App