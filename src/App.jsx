import { useState, useCallback } from 'react';
import styles from './App.module.css'
import { Deezer } from './util/Deezer'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Playlist } from './components/Playlist/Playlist';
import { SearchResults } from './components/SearchResults/SearchResults';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const search = useCallback(async (searchQuery) => {
    const { data } = await Deezer.searchTrack(searchQuery);
    setIsVisible(true);
    setSearchResults(data);
  }, []);

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((trackAdded) => trackAdded.id === track.id)) {
      return;
    }
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks(
      playlistTracks.filter((removedTrack) => removedTrack.id !== track.id)
      )
  }, []);

  const resetTracks = useCallback((validator) => {
    setIsReset(validator);
  }, [])

  return (
    <>
      <header className={styles.header}>
        <h1>Ja<strong>mmm</strong>ing</h1>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.menu}>
          <SearchBar 
            onSearch={search} 
            isTracklistVisible={isVisible}
            isReset={isReset}
            onReset={resetTracks}
          />
        </div>

        <div className={styles.section}>
          {

          isReset ? <SimpleBar className={styles.scrollbar}>
            <SearchResults
              searchResults={searchResults}
              onAdd={addTrack}
              isReset={isReset}
              onReset={resetTracks}
            />
          </SimpleBar>
          : null
          }
          <SimpleBar className={styles.scrollbar}>
            <Playlist
              playlistTracks={playlistTracks}
              onRemove={removeTrack}
              isTracklistVisible={isVisible}
            />
          </SimpleBar>
        </div>
      </main>
    </>
  )
}

export default App