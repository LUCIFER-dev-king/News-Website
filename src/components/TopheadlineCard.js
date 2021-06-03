import React from "react";
import { useHistory } from "react-router-dom";
import placeHolderImage from "../images/placeHolderImage.png";

const TopheadlineCard = ({ articles, readlater }) => {
  let history = useHistory();

  const sendArticle = (article, readlater) => {
    history.push({
      pathname: "/article",
      state: {
        article: article,
        readlater: readlater,
      },
    });
  };

  return (
    <div className='grid-container'>
      {articles.map((article, index) => (
        <div key={index} className='card-container'>
          <div
            className='card-image'
            style={{
              background: article.urlToImage
                ? `url(${article.urlToImage})`
                : `url(${placeHolderImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {console.log(article.title.length)}
          {article.title.length > 85 ? (
            <h4 className='card-text'>{article.title.slice(0, 90)}...</h4>
          ) : (
            <h4 className='card-text'>{article.title}</h4>
          )}
          <p className='card-date'>{article.publishedAt.slice(0, 10)}</p>
          <a
            className='card-btn'
            onClick={() => {
              sendArticle(article, readlater);
            }}
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default TopheadlineCard;
