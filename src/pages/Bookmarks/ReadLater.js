import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import firebase from "firebase/app";
import "firebase/database";
import TopheadlineCard from "../../components/TopheadlineCard";

const ReadLater = () => {
  const [user, setUser] = useState("");
  const [articles, setArticles] = useState([]);

  const getArticles = (u) => {
    console.log(u.uid);
    firebase
      .database()
      .ref()
      .child(u.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          var values = [];
          snapshot.forEach((snap) => {
            var newObj = { ...snap.val(), key: `${snap.key}` };
            console.log("New", newObj);
            values.push(newObj);
          });
          console.log(values);
          values.push();
          setArticles(values);
        } else {
          console.log("No data available");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getArticles(JSON.parse(localStorage.getItem("user")));
    setTimeout(() => {}, 2000);
  }, []);
  return (
    <Header>
      <div className='container'>
        <h2 className='readlater-title'>Bookmarks</h2>
        <TopheadlineCard articles={articles} readlater={true} />
      </div>
    </Header>
  );
};

export default ReadLater;
