import React from 'react';
import HotstarLogo from "../images/hotstarlogo.png";
import { SiPrime, SiHulu, SiAppletv } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
const Genre = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className='media'>
                <h3 className='media_heading'>Media Platforms</h3>
                <div className='media_logo'>
                    <div className='media_logo_netflix'><RiNetflixFill /></div>
                    <h4 className='media_logo_heading'>Netflix</h4>
                </div>
                <div className='media_logo'>
                    <div className='media_logo_prime'><SiPrime /></div>
                    <h4 className='media_logo_heading'>Prime</h4>
                </div>
                <div className='media_logo'>
                    <div className='media_logo_hulu'><SiHulu /></div>
                    <h4 className='media_logo_heading'>Hulu</h4>
                </div>
                <div className='media_logo'>
                    <div className='media_logo_apple'><SiAppletv /></div>
                    <h4 className='media_logo_heading'>Apple Tv</h4>
                </div>
            </div>
            <div className='genre'>
                <h3 className='genre_heading'>Genre</h3>
                <h4>Action</h4>
                <h4>Romantic</h4>
                <h4>Thriller</h4>
                <h4>Sci-Fi</h4>
                <h4>Drama</h4>
                <h4>Comedy</h4>
            </div>
        </div>
    )
}

export default Genre