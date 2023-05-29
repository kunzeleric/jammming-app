/* eslint-disable react/prop-types */
import { useCallback, useState } from 'react'
import styles from './SearchBar.module.css'

export const SearchBar = (props) => {
    const [searchSong, setSearchSong] = useState("");


    const search = useCallback(() => {
        if (searchSong.trim()) {
            props.onSearch(searchSong);
            props.onReset(true);
            document.querySelector('input').value = "";
        }
        else {return;}
    }, [props.onSearch, searchSong])

    const handleSearch = useCallback((event) => {
        setSearchSong(event.target.value)
    }, []);

    const reset = useCallback(() => {
        props.onReset()
    }, [props.onReset, props.isReset])

    return (
        <div className={styles.searchWrapper}>
            <input type="text" placeholder="Search here" onChange={handleSearch} />
            <button className={styles.searchButton} onClick={search}>SEARCH SONGS</button>
            {
                props.isReset ? <button className={styles.resetButton} onClick={reset}>RESET SEARCH</button>
                    : null
            }
        </div>
    )
}
