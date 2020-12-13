import React from 'react'
import './VideoRow.css'

function VideoRows({views, subs, description, timestamp, channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" className="videoRow__image"/>
            <div className="videoRow__text">
                <p className="videoRow__headline">
                    {channel} . <span className="videoRow__subsNumber">{subs} </span>  Subscribers {view} views .{timestamp}
                </p>
    <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoRows
