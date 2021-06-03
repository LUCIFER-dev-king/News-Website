import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../layout/Header";
import "./Article.css";
import { v4 } from "uuid";
import firebase from "firebase/app";
import "firebase/database";

const Article = ({ history: { push } }) => {
  var database = firebase.database();

  const location = useLocation();
  console.log(location.state.article);
  console.log(location.state.readlater);

  const {
    author,
    title,
    description,
    publishedAt,
    content,
    url,
    urlToImage,
    key,
  } = location.state.article;

  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const addToReadLater = async () => {
    try {
      database.ref(user.uid + "/" + v4()).set({
        author,
        title,
        description,
        publishedAt,
        content,
        url,
        urlToImage,
        time: Date(),
      });
    } catch (error) {
      console.log("Er", error);
    }
  };

  const removeFromReadLater = () => {
    try {
      database.ref(user.uid + "/" + key).remove();
      setTimeout(() => {
        push("/readlater");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Header>
      <div className='container'>
        <div className='article'>
          <div className='article-title'>
            <a href=''>{title}</a>
          </div>
          <div className='article-desc'>{description}</div>
          <div className='articlePublished'>
            <div className='articlePublished-left'>
              <div className='articlePublished-date'>{author}</div>
              <div className='articlePublished-date'>
                {publishedAt.slice(0, 10)}
              </div>
              <div className='articlePublished-date'>
                {publishedAt.slice(11, 16)}
              </div>
            </div>

            <div className='articlePublished-right'>
              {location.state.readlater ? (
                <button className='article-btn' onClick={removeFromReadLater}>
                  Remove from read later
                </button>
              ) : (
                <button className='article-btn' onClick={addToReadLater}>
                  Add to read later
                </button>
              )}
            </div>
          </div>
          <div
            className='article-image'
            style={{
              background: `url(${urlToImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className='aritcle-content'>{content}</div>
        </div>
      </div>
    </Header>
  );
};

export default Article;
