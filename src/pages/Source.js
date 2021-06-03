import React from "react";
import Header from "../layout/Header";
import "../App.css";

const Source = () => {
  return (
    <Header>
      <div className='container'>
        <div className='source'>
          <div className='source-title'>SOURCE OF NEWS</div>
          <div className='bar'></div>
          <div className='source-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            iure ullam dolorem voluptate quae, architecto quo sapiente doloribus
            minus natus earum voluptas deserunt quis esse quisquam, nesciunt,
            veniam atque odio soluta! Cupiditate, at ea quidem dolores facere
            in! Molestiae tempore provident nobis. Nihil sit quo magnam porro
            illo error sint.
          </div>
          <div className='source-category'>NEWS Category</div>
          <div className='bar' style={{ width: "100px" }}></div>
          <div className='source-category-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            placeat cumque porro quo delectus iste sequi veritatis omnis
            accusamus dignissimos.
          </div>
          <div className='source-category-title'>Categories</div>
          <div className='bar' style={{ width: "60px" }}></div>
          <div className='source-category-list'>
            <ul>
              <li>Business</li>
              <li>Entertainment</li>
              <li>General</li>
              <li>Health</li>
              <li>Science</li>
              <li>Sports</li>
              <li>Techology</li>
            </ul>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Source;
