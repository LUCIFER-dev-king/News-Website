import React from "react";
import { useHistory } from "react-router-dom";

const TopheadlineCard = ({ articles }) => {
  let history = useHistory();

  const sendArticle = (article) => {
    history.push({
      pathname: "/article",
      state: {
        article: article,
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
              background: `url(${article.urlToImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h4 className='card-text'>{article.title}</h4>
          <p className='card-date'>{article.publishedAt.slice(0, 10)}</p>
          <a className='card-btn'>Read More</a>
        </div>
      ))}
    </div>
  );
};

export default TopheadlineCard;
