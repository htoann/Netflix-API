import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";
import { Link } from "react-router-dom";

function Watch() {
  // const location = useLocation();
  // const movie = location.state.movie;

  return (
    <div className="watch">
      <div className="back">
        <Link to="/">
          <ArrowBackOutlined className="m-2" />
          Home
        </Link>
      </div>
      <video
        className="video"
        loop
        autoPlay
        progress="true"
        controls
        muted
        src="https://firebasestorage.googleapis.com/v0/b/netflix-16c38.appspot.com/o/items%2F1649760689070video?alt=media&token=e118fef6-59f9-448c-a323-bfa3e40c0203"
      ></video>
    </div>
  );
}

export default Watch;
