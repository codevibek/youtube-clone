import React from "react";
import "./VideoCard";
import Avatar from "@material-ui/core/Avatar";
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img
        src="/phone.jpg"
        alt=""
        className="videoCard__thumbnail"
        style={{ height: "240px", width: "240px", objectFit: "contain" }}
      />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" alt={channel} src="" />
        <div className="videoCard__text">
          <h4>Watch new stream</h4>
          <p>Vecc sir</p>
          <p>980k views.{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
