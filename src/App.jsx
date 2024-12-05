import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Settings from './components/Settings';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Settings />
      </div>
    </div>
  );
}

export default App;