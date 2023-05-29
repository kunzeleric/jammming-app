import { useState, useEffect } from 'react';
import styles from './App.module.css'
import { Deezer } from './util/Deezer'
import { TrackList } from './components/TrackList/TrackList';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
  const [tracks, setTracks] = useState([]);

  async function fetchData(searchQuery) {
    const { data } = await Deezer.searchTrack(searchQuery);
    setTracks(data);
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
          <SimpleBar>
            <TrackList trackList={tracks} />
          </SimpleBar>
            <div>Direita</div>

        </div>
      </main>
    </>
  )
}

export default App