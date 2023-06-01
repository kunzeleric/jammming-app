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
  const [isReset, setIsReset] = useState(false);

  async function search(searchQuery) {
    const { data } = await Deezer.searchTrack(searchQuery);
    setSearchResults(data);
  }

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((trackAdded) => trackAdded.id === track.id)) {
      return;
    }
    setPlaylistTracks((previousPlaylist) => [...previousPlaylist, track]);
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((previousPlaylist) => previousPlaylist.filter((removedTrack) => removedTrack.id !== track.id)
    )
  }, []);

  const resetTracks = useCallback((validator) => {
    setIsReset(validator);
  }, [])

  const resetPlaylist = () => {
    setPlaylistTracks([])
  }

    return (
      <>
        <header className={styles.header}>
          <h1>Ja<strong>mmm</strong>ing</h1>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.menu}>
            <SearchBar
              onSearch={search}
              isReset={isReset}
              onReset={resetTracks}
            />
          </div>
          <div className={styles.section}>
            {
              isReset ?
                <SimpleBar className={styles.scrollbar}>
                  <SearchResults
                    searchResults={searchResults}
                    onAdd={addTrack}
                    isReset={isReset}
                    onReset={resetTracks}
                    title="Search Results"
                  />
                </SimpleBar>
                : null
            }

            {
              playlistTracks.length > 0 ?
                <SimpleBar className={styles.scrollbar}>
                  <button className={styles.clearBtn} onClick={resetPlaylist}>Clear</button>
                  <Playlist
                    playlistTracks={playlistTracks}
                    onRemove={removeTrack}
                    title="My Playlist"
                  />
                </SimpleBar>
                : null
            }
          </div>
        </main>
      </>
    )
  }

export default App