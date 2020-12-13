import React from 'react'
import './SearchPage.css'
import TuneIcon from "@material-ui/icons/Tune"
import ChannelRow from './ChannelRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
            image=""
            channel=""
            verfied=""
            subs=""
            noOfVideos=""
            description=""
            /> 

        </div>
    )
}

export default SearchPage
