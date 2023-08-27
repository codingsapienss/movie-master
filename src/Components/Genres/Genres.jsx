/* eslint-disable react/prop-types */
import axios from 'axios'
import './Genres.css'
import { useEffect } from 'react'
import { Chip } from '@mui/material'

const Genres = ({ type, selectedGenres, setSelectedGenres, genres, setGenres, setPage }) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((gen) => {
            return gen.id !== genre.id
        }))
        setPage(1)
    }


    const handleRemove = (gen) => {
        setSelectedGenres(selectedGenres.filter((selected) => { return selected.id !== gen.id }))

        setGenres([...genres, gen])
        setPage(1)
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=fa3cc0a92ba7aff7d30336ebc415def7&language=en-US`)
        setGenres(data.genres)
    }
    // console.log(genres)

    useEffect(() => {
        fetchGenres()
        return () => {
            setGenres([])
        }
    }, [])

    return (
        <div>
            <div className="genres">

                {selectedGenres &&
                    selectedGenres.map((gen) => {
                        return <Chip clickable style={{ margin: 6 }} key={gen.id} size="small" variant="contained" label={gen.name}
                            color='primary'
                            onDelete={() => { handleRemove(gen) }}
                        />
                    })
                }

                {genres &&
                    genres.map((gen) => {
                        return <Chip clickable style={{ margin: 5, backgroundColor: '#9c27b0', color: 'white' }} key={gen.id} size="small" variant="outlined" label={gen.name}

                            onClick={() => { handleAdd(gen) }}

                        />
                    })
                }
            </div>
        </div>
    )
}

export default Genres