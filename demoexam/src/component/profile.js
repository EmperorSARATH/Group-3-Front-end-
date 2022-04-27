import React from 'react';
import { Route, Link,  Switch} from "react-router-dom";
import Button from '@mui/material/Button';
//import axios from 'axios';
//import './style/view_category.css';
import View_profile from './view-profile';

export default class Profile extends React.Component {
   
  
    render() {
        
      return (
          <div>
              <Link to="/user/view_profile"><Button>View profile</Button></Link>
              <Switch>
                  <Route exact path="/user/view_profile" component={View_profile}></Route>
              </Switch>
          </div>
        
       
        
      )
    }
  }