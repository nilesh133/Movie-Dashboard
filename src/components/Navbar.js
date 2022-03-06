import React from 'react'
import {AiFillAppstore} from "react-icons/ai"
import {RiSettings5Fill} from "react-icons/ri";
import {MdCollectionsBookmark, MdOutlinePlayCircleFilled} from "react-icons/md";
import {HiBell} from "react-icons/hi";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_heading'>M</div>
            <div className='navbar_options'>
                <span><AiFillAppstore/></span>
                <span><RiSettings5Fill/></span>
                <span><MdCollectionsBookmark/></span>
                <span><MdOutlinePlayCircleFilled/></span>
                <span><HiBell/></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar