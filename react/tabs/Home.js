/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./tabs.css";

function Home() {
  const [activeElem, setActiveElem] = useState('HTML');

  function handleClick(e) {
    e.preventDefault();
    setActiveElem(e.target.innerHTML);
  }
  return (
    <div id="tabs">
      <div className="anchors">
        <a
          href="#"
          onClick={handleClick}
          className={activeElem === 'HTML' ? "active" : ""}
        >
          HTML
        </a>
        <a
          href="#"
          onClick={handleClick}
          className={activeElem === 'CSS' ? "active" : ""}
        >
          CSS
        </a>
        <a
          href="#"
          onClick={handleClick}
          className={activeElem === 'JS' ? "active" : ""}
        >
          JS
        </a>
        <a
          href="#"
          onClick={handleClick}
          className={activeElem === 'React' ? "active" : ""}
        >
          React
        </a>
        <a
          href="#"
          onClick={handleClick}
          className={activeElem === 'Node' ? "active" : ""}
        >
          Node
        </a>
      </div>
      <div className="content">
        <div className="con active">
          <h3>HTML</h3>
          <p>
            HTML ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            pariatur corrupti impedit accusantium quo eos maiores? Ex quia
            laboriosam quo commodi laborum ullam perferendis, nihil aliquam
            accusamus totam. Velit, molestias?
          </p>
        </div>
        <div className="con">
          <h3>CSS</h3>
          <p>
            CSS ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            pariatur corrupti impedit accusantium quo eos maiores? Ex quia
            laboriosam quo commodi laborum ullam perferendis, nihil aliquam
            accusamus totam. Velit, molestias?
          </p>
        </div>
        <div className="con">
          <h3>JS</h3>
          <p>
            Javascript ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam pariatur corrupti impedit accusantium quo eos maiores? Ex
            quia laboriosam quo commodi laborum ullam perferendis, nihil aliquam
            accusamus totam. Velit, molestias?
          </p>
        </div>
        <div className="con">
          <h3>React</h3>
          <p>
            React ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            pariatur corrupti impedit accusantium quo eos maiores? Ex quia
            laboriosam quo commodi laborum ullam perferendis, nihil aliquam
            accusamus totam. Velit, molestias?
          </p>
        </div>
        <div className="con">
          <h3>Node</h3>
          <p>
            Node ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            pariatur corrupti impedit accusantium quo eos maiores? Ex quia
            laboriosam quo commodi laborum ullam perferendis, nihil aliquam
            accusamus totam. Velit, molestias?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
