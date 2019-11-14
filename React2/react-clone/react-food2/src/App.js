import React from 'react';
import './App.less';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Admin from './Admin'
import Breakfast from './Pages/Breakfast/breakfast'
function App() {
  return (
    <div className="App">
      <Router>
        <Admin>
        <Switch>
            {/* <Route path="/common" render={() => (
              <Route path="/common/detail/:id" component={Detail} />
            )} /> */}
            {/* <Route path="/search" component={Search} /> */}
            {/* <Route path="/collections" component={Collections} /> */}
            {/* <Route path="/topic" component={NoMatch} /> */}
            {/* <Route path="/menu" component={NoMatch} /> */}
            {/* <Route path="/tags" component={NoMatch} /> */}
            <Route path="/" render={() => (
              <Switch>
                {/* <Route path="/home" component={Home} /> */}
                
                <Route path="/breakfast" component={Breakfast} />
                {/* <Route path="/meat/pock" component={Pock} />
                <Route path="/meat/chicken" component={Chicken} />
                <Route path="/meat/duck" component={Duck} />
                <Route path="/meat/beef" component={Beef} />
                <Route path="/meat/mutton" component={Mutton} /> */}
                <Redirect to="/home" />
              </Switch>
            )} />
          </Switch>
        </Admin>
      </Router>
      
    </div>
  );
}

export default App;
