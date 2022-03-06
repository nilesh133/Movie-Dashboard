import React from 'react';
import Search from "./Search";
import Movieslist from "./Movieslist";
import Watchinglist from './Watchinglist';
const Movies = () => {
  return (
    <div style={{flexGrow: "1", padding: "2rem"}}>
      <Search/>
      <Movieslist/>
      <Watchinglist/>
    </div>
  )
}

export default Movies