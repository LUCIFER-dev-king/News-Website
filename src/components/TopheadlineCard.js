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
        <div
          key={index}
          className='card'
          onClick={() => sendArticle({ article })}
        >
          <div
            className='card-image'
            style={{
              background: `url(${article.urlToImage})`,
            }}
          ></div>
          <div className='card-text'>
            <a href='/article' article={article}>
              {article.title}
            </a>
          </div>
          <div className='card-author'>-{article.author}</div>
        </div>
      ))}
    </div>
  );
};

export default TopheadlineCard;
