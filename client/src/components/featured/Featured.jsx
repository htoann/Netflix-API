import "./featured.scss";
import { InfoOutlined, PlayArrowRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "./../../utils/capitalizeFirstLetter";
import { getRandomMovieApi } from "../../utils/getApi";

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    getRandomMovieApi(type, setContent);
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{capitalizeFirstLetter(type)}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Genres</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <div className="linear"></div>
      {content ? (
        <>
        <img width="100%" src={content.img} alt="" />
        <div className="info">
        <div className="title">{content.title}</div>
        <div className="desc">{content.desc}</div>
        <div className="buttons">
          <Link to={{ pathname: "/watch" }} state={{ movie: content }}>
            <button className="play">
              <PlayArrowRounded className="icon" />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined className="icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
      </>
      ) : (
        <div className="loading">Loading...</div>
      )}

      
      <div className="fadeBottom"></div>
    </div>
  );
}

export default Featured;
