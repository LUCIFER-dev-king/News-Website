import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../layout/Header";
import "./Article.css";
import { v4 } from "uuid";
import firebase from "firebase/app";
import "firebase/database";
import Toast from "../../components/Toast";

const Article = ({ history: { push } }) => {
  const [toastMsg, setToastMsg] = useState("");
  const [toastClasName, settoastClasName] = useState("");

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
      setToastMsg("Added to read later");
      settoastClasName("toast active");
      setTimeout(() => {
        push("/readlater");
      }, 3000);
    } catch (error) {
      console.log("Er", error);
    }
  };

  const removeFromReadLater = () => {
    try {
      database.ref(user.uid + "/" + key).remove();
      setToastMsg("Removed to read later");
      settoastClasName("toast active");
      setTimeout(() => {
        push("/readlater");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Header>
      {toastMsg && <Toast toastTitle={toastMsg} className={toastClasName} />}
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
