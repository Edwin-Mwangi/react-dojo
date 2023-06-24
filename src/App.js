import Navbar from './Navbar';
import Home from './Home';

function App() {

  //using dynamic values
  const title = 'Welcome to a new blog';
  const likes = 50;
  const person = { name: "Yoshi", age: 35}
  const link = 'https://www.google.com'

  return (
    // jsx code, similar to HTML...ie check className
    // added js jsreact to emmet for shortcuts to work
    <div className="App">
      {/* component in template */}
      <Navbar/>
      <Home/>

      <div className="content">
        {/* dynamic vals used on jsx */}
        <h1>{ title }</h1>

        {/* <p>{ person }</p> error Objs not valid react child */}
        <p>{ person.name } Liked { likes} times</p>
        <p>{ [1,2,3,4,5]} 
          <br /><span>{ Math.random() * 10 }</span> 

          {/* inline styling...2 curly braces inner as syles stored in Obj  */}
          <a href={ link } style= {{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
            padding: '5px',
            textDecoration: 'none'
          }}> Google site</a>
        </p>
      </div>
    </div>
  );
}

export default App;
