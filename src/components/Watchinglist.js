import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const Watchinglist = () => {
    return (
        <div className='watchinglist'>
            <div className='watchinglist_left'>
                <div className='watchinglist_left_heading'>
                    <h3>Continue watching<span>(3 Movies Remaining)</span></h3>
                    <h4>See more</h4>
                </div>
                <div className='watchinglist_left_movies'>
                    <div className='watchinglist_left_movies_movie'>
                        <div className='watchinglist_left_movies_movie_1'></div>
                        <div className='watchinglist_left_movies_movie_duration'>
                            <div className='watchinglist_left_movies_movie_duration_inner'></div>
                        </div>
                        <div className='watchinglist_left_movies_movie_info'>
                            <h3>Shershaah | 2021</h3>
                            <span><BsFillPlayCircleFill /></span>
                        </div>
                    </div>
                    <div className='watchinglist_left_movies_movie'>
                        <div className='watchinglist_left_movies_movie_2'></div>
                        <div className='watchinglist_left_movies_movie_duration'>
                            <div className='watchinglist_left_movies_movie_duration_inner'></div>
                        </div>
                        <div className='watchinglist_left_movies_movie_info'>
                            <h3>Squid Game | 2021</h3>
                            <span><BsFillPlayCircleFill /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='watchinglist_right'>
                <div className='watchinglist_right_moviebg'></div>
                <div className='watchinglist_right_info'>
                    <h3>All Of Us Are Dead</h3>
                    <div className='watchinglist_right_info_watch'>
                        <span><BsFillPlayCircleFill /></span>
                        <h4>Watch now</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watchinglist