const app = {
    title: 'I am a title',
    options: []
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
    }
  };
  
  const onRemove = () => {
    app.options = [];
    render();
  };
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  };
  
  
  const appRoot = document.getElementById('app');
  
  const render = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        <p>{app.options.length > 0 ? 'Nice decision' : 'No decision'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i pick?</button>
        <button onClick={onRemove}>Remove</button>
        <ol>
          {
            app.options.map((text) => {
              return <li key={text}>{text}</li>;
            })
          }
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add</button>
        </form>
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  };
  
  render();