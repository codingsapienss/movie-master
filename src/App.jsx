import { Route, Routes } from "react-router-dom"
import "./App.css"
import BottomNav from "./Components/BottomNav/BottomNav"
import Header from './Components/Header/Header'
import Trending from "./Pages/Trending/Trending"
import Movies from "./Pages/Movies/Movies"
import Series from "./Pages/Series/Series"
import Search from "./Pages/Search/Search"



const App = () => {
  return (
    <div className="app">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <BottomNav />
    </div>
  )
}

export default App