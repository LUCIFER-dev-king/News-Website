import React from "react";
import { useLocation } from "react-router-dom";

const Article = ({ props }) => {
  const location = useLocation();
  console.log(location.state.article);

  const { author, title, description, publishedAt, content, url, urlToImage } =
    location.state.article.article;
  return (
    <div className='container'>
      <div className='article'>
        <div className='article-title'>{title}</div>
      </div>
    </div>
  );
};

export default Article;
