import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './blogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path ="/">
              <Home/>
            </Route>
            {/* exact so '/'  does not match '/create'*/}
            <Route exact path ="/create">
              <Create/>
            </Route> 
            {/* variable id (route parameters ) */}
            <Route exact path ="/blog/:id">
              <BlogDetails/>
            </Route> 
            {/* at the bottom so as not to include above URLs */}
            <Route path ="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
