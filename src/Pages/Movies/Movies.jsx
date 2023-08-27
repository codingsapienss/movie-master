import axios from "axios"
import { useEffect, useState } from "react"
import './Movies.css'
import SingleContent from "../../Components/SingleContent/SingleContent"
import CustomPagination from "../../Components/CustomPagination/CustomPagination"
import Genres from "../../Components/Genres/Genres"
import useGenre from "../../Hook/useGenre"


const Movies = () => {


  const [content, setContent] = useState([])
  const [totalPages, setTotalPages] = useState([])
  const [page, setPage] = useState(1)

  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])

  const genreForUrl = useGenre(selectedGenres)


  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fa3cc0a92ba7aff7d30336ebc415def7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreForUrl}`)
    // console.log(data);
    setContent(data.results)
    setTotalPages(data.total_pages > 500 ? 500 : data.total_pages)
  }


  useEffect(() => {
    fetchMovies()
  }, [page, genreForUrl])

  return (
    <>
      <div className="movies">
        {/* <div className="pageTitle" >Movies</div> */}
        <Genres type="movie" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPage={setPage} />
        {
          content && content.map((item) => {
            return < SingleContent id={item.id} poster={item.poster_path} key={item.id} title={item.title || item.name} date={item.release_date || item.first_air_date} media_type={item.media_type} vote_avg={item.vote_average} />
          })
        }
        {
          totalPages > 1 &&
          <CustomPagination setPage={setPage} totalPages={totalPages} />
        }
      </div>
    </>

  )

}

export default Movies