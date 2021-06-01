import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";
import TopheadlineCard from "../components/TopheadlineCard";

const Home = () => {
  var apiKey = process.env.REACT_APP_APIKEY;
  const [articles, setArticles] = useState([]);

  const headlineNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=6`
      )
      .then((res) => {
        setArticles(res.data.articles);
        console.log(articles);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    headlineNews();
  }, []);
  return (
    <div className='container home'>
      <h2>Top Headlines</h2>
      <TopheadlineCard articles={articles} />
      <h2>Business</h2>
    </div>
  );
};

export default Home;
