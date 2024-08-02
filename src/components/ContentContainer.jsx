import React from 'react';
import './components_css/ContentContainer.css';
import AsciiArt from './AsciiArt';

const ContentContainer = () => (
  <div className="content-container">
    <div className="text-container">
      <h1 className="title-text">Welcome to Askadev</h1>
      <p className="description-text">
        At <span className="highlight">Askadev</span>, we believe that <span className="highlight">knowledge</span> is a powerful tool for <span className="highlight">transformation</span>. Our mission is to harness this power by providing unparalleled <span className="highlight">solutions</span> and <span className="highlight">support</span> to individuals and communities around the world. Here, we’re not just about answering questions—we’re about igniting a journey of <span className="highlight">discovery</span>, <span className="highlight">innovation</span>, and <span className="highlight">growth</span>.
      </p>
    </div>
    <AsciiArt />
  </div>
);

export default ContentContainer;