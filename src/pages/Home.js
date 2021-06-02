import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";
import TopheadlineCard from "../components/TopheadlineCard";
import Header from "../layout/Header";

const Home = () => {
  var apiKey = process.env.REACT_APP_APIKEY;
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("general");
  const headlineNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=${apiKey}&pageSize=9`
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

  const handleChange = (e) => {
    setTopic(e.target.value);
    console.log(topic);
  };
  return (
    <Header>
      <div className='container home'>
        <div className='home-title'>
          <h2>Top Headlines</h2>
          <select
            className='dropDown'
            value={topic}
            onChange={handleChange.bind}
          >
            <option value='general'>Top Headlines</option>
            <option value='entertainment'>Entertainment</option>
            <option value='business'>Business</option>
            <option value='health'>Health Care</option>
            <option value='sports'>Sports</option>
          </select>
        </div>

        <TopheadlineCard articles={articles} />
        <h2>Business</h2>
      </div>
    </Header>
  );
};

export default Home;
