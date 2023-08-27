import './Trending.css'
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import SingleContent from "../../Components/SingleContent/SingleContent"
import CustomPagination from '../../Components/CustomPagination/CustomPagination'

const Trending = () => {
  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState([])



  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=fa3cc0a92ba7aff7d30336ebc415def7&page=${page}`)

    console.log(data)
    setContent(data.results)
    setTotalPages(data.total_pages)
  }

  useEffect(() => {
    fetchTrending()
  }, [page])

  return (
    <div>
      <div className="trending">

        {/* <div className="pageTitle"> Trending </div> */}
        {
          content && content.map((item) => {
            return < SingleContent id={item.id} poster={item.poster_path} key={item.id} title={item.title || item.name} date={item.release_date || item.first_air_date} media_type={item.media_type} vote_avg={item.vote_average} />
          })
        }
      </div>
      {totalPages > 1 > 0 && <CustomPagination setPage={setPage} totalPages={totalPages} />}

    </div>
  )
}

export default Trending