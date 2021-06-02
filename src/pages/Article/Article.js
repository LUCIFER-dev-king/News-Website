import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../layout/Header";

const Article = ({ props }) => {
  const location = useLocation();
  console.log(location.state.article);

  const { author, title, description, publishedAt, content, url, urlToImage } =
    location.state.article;
  return (
    <Header>
      <div className='container'>
        <div className='article'>
          <div className='article-title'>{title}</div>
          <div className='article-desc'>{description}</div>
          <div className='article-author'>{author}</div>
          <div className='article-date'>{publishedAt.slice(0, 10)}</div>
          <div className='article-time'>{publishedAt.slice(11, 16)}</div>
        </div>
      </div>
    </Header>
  );
};

export default Article;
