import React from 'react';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>댕글</h1>
      </div>
      <div className="main">
        <p>본문들어갈거에요</p>
      </div>
      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default App;