import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Hello from './components/Hello';
import App from './App';

//import Counter from './components/Counter'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Hello name="Ray" enthusiasmLevel={5}></Hello>,
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render(
  <App></App>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
