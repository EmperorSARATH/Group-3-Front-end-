import React, { Component } from 'react';
import './App.css';
// import Login from './component/login';
// import User from './component/user';
//import Signup from './component/signup';
//import Notfound from './component/notfound';
import { BrowserRouter as Router, Route, Link,  Switch} from "react-router-dom";
import Signup from "./component/signup";
import Login from "./component/login";
import Dashboard from './component/Dashboard';
import AdminDashboard from './component/AdminDashboard';
import Category from './component/category';
import View_category from './component/view_category';
import Profile from './component/profile';
import View_profile from './component/view-profile';
import pic from './images/Examportal.jpg';
import Add_quiz from './component/add_quiz';
import View_alluser from './component/view_alluser';
import Take_test from './component/take_test';
import Remove_user from './component/remove_user';

const Home = () =>{
  localStorage.clear();
  //console.log(localStorage.getItem("loggedIn") == null)
return(
    <div>
        
        <h2>Exam Portal</h2>
        <div>
            <img src={pic} alt=""></img>
        </div>
    </div>

);
}
class App extends Component {  
    constructor(props){
        super(props);
        this.state={
            loggedIn :false
        } 
    }
    render() {  
       
        return (
            <Router>
                <div className="App">
                    <nav className="navbar">
                        <ul className="nav nav-pills nav-options">
                            <li><Link to="/"><h3 className="nav-bar-options">Home</h3></Link></li>
                            <li><Link to="/login"><h3 className={'nav-bar-options '+ (localStorage.getItem("loggedIn")!=null ? 'd-none':'')}  >Log In</h3></Link></li>
                            <li><Link to="/user/"><h3 className="nav-bar-options">Sign Up</h3></Link></li>
                            {/* <li>
                                <Link to="/user">User</Link>
                            </li> */}
                        </ul>
                      </nav> 
                    <br/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login}/> 
                        <Route exact path="/user/" component={Signup} />
                        {/* <Route path="/login/Dashboard" component={Login} onEnter={this.requireAuth}/> */}
                        <Route exact path="/login/Dashboard" component={Dashboard} /> 
                        <Route exact path="/login/AdminDashboard"  component={AdminDashboard} /> 
                        <Route exact path="/admin/category" component={Category} />
                        <Route exact path="/admin/view-category" component={View_category} />
                        <Route exact path="/user/profile" component={Profile} />
                        <Route exact path="/user/view_profile" component={View_profile} />
                        <Route exact path='/admin/add_quiz' component={Add_quiz}/>
                        <Route exact path='/admin/view_alluser' component={View_alluser} />
                        <Route exact path='/user/test' component={Take_test}/>
                        <Route exact path='/admin/remove_user' component={Remove_user} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
