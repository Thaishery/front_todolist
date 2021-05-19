import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const taches = [
  {name:"sortir le chien", checked: true, id: "1"},
  {name:"faire la vaisselle", checked: false, id: "2"},
  {name:"sortir les poubelles", checked: true, id: "3"},
]
// const listeCourse = [
//   {name: "oeufs", quantity:"12", id:1},
//   {name: "poires", quantity:"9", id:2},
//   {name: "pommes", quantity:"8", id:3},
//   {name: "baguette", quantity:"1",id:4},
// ]

ReactDOM.render(
    <App taches={taches} />,
  document.getElementById('root')
);

