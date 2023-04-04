import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import MainContent from './MainContent';


function App(){


  return(
    <div className='page'>
      <Header />
      <MainContent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);