import React from 'react';
import './App.css'; // Import your CSS file for styling
import Header from './components/Header';
import History from './components/History';
import Team from './components/Team';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Content />
      <History />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
