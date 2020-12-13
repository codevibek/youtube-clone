import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import {Link} from 'react-router-dom'

import VideoCallIcon from '@material-ui/icons/VideoCall'

import AppsIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import './Header.css'
import {useState} from 'react'
function Header() {

    const [inputSearch, setInputSearch] = useState('')
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />
            <Link to="/">
                <img className="header__logo"
                alt="logo"
                src="data:image/png;base64,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"/>
            </Link>
        </div>
        <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
           <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/>
            </Link>

         </div>
         <div clasName="header__icons">
            <VideoCallIcon className="header__icon" />
            <AppsIcon  className="header__icon"/>
            <NotificationIcon  className="header__icon"/>
            <Avatar alt="" 
            src=""/>
         </div>
        </div>
    )
}

export default Header
