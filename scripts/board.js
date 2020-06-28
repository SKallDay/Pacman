function init() {
  debugger;
} init();



const layout = require('./layout');

class Board {
  constructor(layout) {
    this.layout = layout;
    this.width = 28;
  }

  createBoard(layout) {
    return layout.length;
  }
}

module.exports = Board;
