'use strict';

console.log('Yo App.js is running');

var app = {
  title: 'I am a title',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemove = function onRemove() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Nice decision' : 'No decision'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should i pick?'
    ),
    React.createElement(
      'button',
      { onClick: onRemove },
      'Remove'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (text) {
        return React.createElement(
          'li',
          { key: text },
          text
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
