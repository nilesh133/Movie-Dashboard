import React from 'react'
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className='search'>
        <h3>Trending this week...</h3>
        <div className='search_box'>
          <span><BiSearch /></span>
          <input type="text" placeholder='Search for songs, artists, etc...' />
        </div>
      </div>
  )
}

export default Search