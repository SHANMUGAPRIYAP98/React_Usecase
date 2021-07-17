import logo from './logo.svg';
import './App.css';
import RegisterForm from './Components/RegisterForm';
import NavBar from './Routes/NavBar';
import { Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Home from './Components/Home';
import About from './Components/About';
import ApplyLoan from './Components/ApplyLoan';
import PrivateRoute from './Routes/PrivateRoute';
import SideBar from './Routes/SideBar';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <SideBar/>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/register" exact component={RegisterForm}></Route>
      <Route path="/login" exact component={LoginForm}></Route>
      <PrivateRoute path="/loan" exact ><ApplyLoan/></PrivateRoute>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
