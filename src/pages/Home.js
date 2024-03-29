import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import TopheadlineCard from "../components/TopheadlineCard";
import Header from "../layout/Header";

const Home = () => {
  var apiKey = process.env.REACT_APP_APIKEY;
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("general");
  const [componentReload, setComponentReload] = useState(true);
  // const [loading, setLoading] = useState(true);
  // const [pageSize, setPageSize] = useState(9);

  // const loadingRef = useRef("");
  // const handleObserver = () => {
  //   setPageSize((prev) => prev + 6);
  //   console.log(pageSize);
  // };
  // const observer = new IntersectionObserver(handleObserver);

  const headlineNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${topic}&apiKey=${apiKey}&pageSize=9`
      )
      .then((res) => {
        setArticles(res.data.articles);
        console.log(res.data.articles);
        // setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    headlineNews(9);
    // observer.observe(loadingRef.current);
  }, [topic]);

  const handleChange = (e) => {
    // setLoading(true);
    setComponentReload(false);
    setTopic(e.target.value);
    console.log(topic);
    setTimeout(() => {
      setComponentReload(true);
      // setLoading(false);
    }, 1500);
  };
  return (
    <Header>
      <div className='container home'>
        <div className='home-title'>
          {topic == "general" ? (
            <h2 style={{ textTransform: "capitalize" }}>Top Headlines</h2>
          ) : (
            <h2 style={{ textTransform: "capitalize" }}>{topic}</h2>
          )}

          <select className='dropDown' onChange={handleChange}>
            <option key='0' value='general'>
              Top Headlines
            </option>
            <option key='1' value='entertainment'>
              Entertainment
            </option>
            <option key='2' value='business'>
              Business
            </option>
            <option key='3' value='health'>
              Health Care
            </option>
            <option key='4' value='sports'>
              Sports
            </option>
            <option key='5' value='science'>
              Science
            </option>
            <option key='6' value='technology'>
              Technology
            </option>
          </select>
        </div>

        {componentReload && (
          <TopheadlineCard articles={articles} readlater={false} />
        )}

        {/*<div>
          <h2
            ref={loadingRef}
            style={{ textAlign: "center", display: loading ? "none" : "block" }}
          >
            Loading....
          </h2>
        </div> */}
      </div>
    </Header>
  );
};

export default Home;
