import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', cursor: 'pointer' }}>
          Go to Home Page
        </div>
      </Link>
      {/* 他のページへのリンクを追加 */}
    </div>
  );
};

export default AboutPage;