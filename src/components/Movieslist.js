import React from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs";
const Movieslist = () => {
    return (
        <>
            <div className='movieslist'>
                <div className='movieslist_movie' style={{ gridColumn: "1 / span 2" }}>
                    <div className='movieslist_movie_img1'></div>
                    <p style={{left: "85%"}}>8.3/10</p>
                    <div className='movieslist_movie_info'>
                        <div>
                            <h3>Money Heist</h3>
                            <h4>2021</h4>
                        </div>
                        <span><BsFillPlayCircleFill /></span>
                    </div>
                </div>
                <div className='movieslist_movie'>
                    <div className='movieslist_movie_img2'></div>
                    <p>8.1/10</p>
                    <div className='movieslist_movie_info'>
                        <div>
                            <h3>Squid Game</h3>
                            <h4>2021</h4>
                        </div>
                        <span><BsFillPlayCircleFill /></span>
                    </div>
                </div>
                <div className='movieslist_movie'>
                    <div className='movieslist_movie_img3'></div>
                    <p>8.9/10</p>
                    <div className='movieslist_movie_info'>
                        <div>
                            <h3>The Family Man</h3>
                            <h4>2021</h4>
                        </div>
                        <span><BsFillPlayCircleFill /></span>
                    </div>
                </div>

            </div></>
    )
}

export default Movieslist