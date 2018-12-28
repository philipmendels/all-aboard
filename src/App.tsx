import React, { Component } from 'react';
import { BoardComponent } from './components/board/board';

class App extends Component {
  render() {
    return (
      <BoardComponent cards={
        [
          {
            id: "abc",
            location: {
              x: 100,
              y: 100
            },
            dimensions: {
              x: 100,
              y: 100
            },
            text: 'This is a card.'
          }
        ]
      } />
    );
  }
}

export default App;