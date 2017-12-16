import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// Clicky Game needs to render 4 rows of 3 pictures.  The pictures need to listen for the click event.
// On click, the score needs to increment +1 and the cards need to shuffle.
// if the same picture is clicked twice, the game needs to start over
// else if the users score reaches 12, the game ends with a button to restart the game or leave.
// The entire app gets rendered through here

ReactDOM.render(<App />, document.getElementById('root'));

