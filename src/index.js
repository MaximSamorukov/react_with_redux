import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div>
      <h1>React with Redux application!</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
