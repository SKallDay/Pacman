requirejs.config({
  baseUrl: 'scripts',
  paths: {
    board: 'board',
    ghost: 'ghost',
    layout: 'layout',
    pacman: 'pacman'
  }
});


require(['layout'], function() {
  console.log(layout().length)
});