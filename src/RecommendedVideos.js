import React from 'react'
import VideoCard from './VideoCard.js'
import './RecommendedVideos.css'
function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">

                <VideoCard  title=""
                            views="M Views"
                            timestamp=""
                            channelImage=""
                            channel="Vec Sir"
                            image="" />
                <VideoCard  title=""
                            views="M Views"
                            timestamp=""
                            channelImage=""
                            channel="Vec Sir"
                            image="" />
                <VideoCard title=""
                            views="M Views"
                            timestamp=""
                            channelImage=""
                            channel="Vec Sir"
                            image=""  />
                <VideoCard  title=""
                            views="M Views"
                            timestamp=""
                            channelImage=""
                            channel="Vec Sir"
                            image="" />
                <VideoCard  title=""
                            views="M Views"
                            timestamp=""
                            channelImage=""
                            channel="Vec Sir"
                            image="" />
                <VideoCard title=""
                            views="M Views"
                            timestamp=""
                            channelImage=""
                            channel="Vec Sir"
                            image=""  />
                <VideoCard  title=""
                            views="M Views"
                            timestamp=""
                            channelImage=""
                            channel="Vec Sir"
                            image="" />



            </div>
        </div>
    )
}

export default RecommendedVideos
