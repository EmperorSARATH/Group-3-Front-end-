//import React,{useState} from 'react';
//import { Navbar } from 'react-bootstrap';
import './style/sidebar.css'
import { Route, Link,  Switch} from "react-router-dom";
import Login from "./login";
import Profile from './profile';
import Take_test from './take_test';
const Dashboard = () => {
        return(
            <div>
             <h2>Welcome {localStorage.getItem("username")}</h2>



             <div className="container-sidebar-user">
        

        <ul className="sidebar">
                
            {/* <li><span><i className="fa fa-home"></i></span><span>Home</span></li> */}
            <li><span><i className="fa fa-users"></i></span><span><Link to="/user/profile" style={{ textDecoration: 'none' ,color:'orange' }} >View Profile</Link></span></li>
            <li><span><i className="fa fa-book"></i></span><span><Link to='/user/test' style={{ textDecoration: 'none' ,color:'orange' }} >Take Test</Link></span></li>
            {/* <li><span><i className="fa fa-bookmark"></i></span><span>Bookmarks</span></li> */}
            <li><span><i className="fa fa-gear"></i></span><span><Link to="/login" style={{ textDecoration: 'none' ,color:'orange' }}>Logout</Link></span></li>

            <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route  exact path="/user/profile" component={Profile}/>
                    <Route exact path="/user/test" component={Take_test} />
            </Switch>
       
 

        </ul>
        {/* <div>
                <h2>Yo just a test</h2>
                </div> */}

        <div className="content">

        </div>
    </div>





        </div>
        );

    
}

export default Dashboard;