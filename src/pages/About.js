import React from "react";
import "../App.css";
import Header from "../layout/Header";
const About = () => {
  return (
    <Header>
      <div className='container'>
        <div className='about'>
          <div className='about-title'>API SOURCE</div>
          <div className='bar' style={{ width: "100px" }}></div>
          <p style={{ margin: "1rem 0rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim atque,
            eveniet inventore eum ea alias blanditiis praesentium libero,
            similique cumque at ex, totam voluptatibus ducimus doloribus!
            Repudiandae, ea magnam, consequuntur sapiente doloribus dolorum eos
            excepturi quisquam magni unde accusantium consequatur rem, explicabo
            consectetur adipisci sit sed! Sit aliquid incidunt accusamus?
          </p>
          <div className='about-api'>
            <a href='https://newsapi.org/'>https://newsapi.org/</a>
          </div>
          <div className='about-title'>GITHUB LINK</div>
          <div className='bar' style={{ width: "100px" }}></div>
          <p style={{ margin: "1rem 0rem" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            laboriosam reiciendis quos natus nisi, ipsum repellendus incidunt
            molestias earum voluptatem? Excepturi, deserunt. Unde cum earum
            accusamus in pariatur voluptate architecto iste incidunt blanditiis,
            officiis illo maiores numquam necessitatibus repellat, dolorum
            quisquam labore aut ipsam tempore nam. Veritatis unde deserunt
            dolores.
          </p>
          <div className='about-api'>
            <a href='https://github.com/LUCIFER-dev-king/News-Website'>
              https://github.com/LUCIFER-dev-king/News-Website
            </a>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default About;
