import React from "react";
import PropTypes from "prop-types";
import "./Video.scss";

const Video = ({ url }) => (
  <div className="video">
    <iframe
      width="90%"
      height="400"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Youtube video"
    />
  </div>
);

Video.propTypes = {
  url: PropTypes.string
};

export default Video;
