import React from 'react';
import axios from 'axios';

import './style/view_category.css';
import './style/view_profile.css';
export default class View_profile extends React.Component {
    state = {
      details: [[]]
    }
  
    componentDidMount() {
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
      axios.get(`http://localhost:8080/user/${localStorage.getItem("username")}`)
        .then(res => {
          const details = res.data;
          console.log(details)
          localStorage.setItem("fname",res.data.fName)
          localStorage.setItem("email",res.data.email)
          localStorage.setItem("phone",res.data.phone)
          this.setState(details);
        })
    }
  
    render() {
        
      return (
      <div>
        <h1>Profile Details</h1>
          <div className='view_profile'>
            
               <ul className='view_ui'>
          {
          
            this.state.details
              .map(details =>
       
                <li  key={details.id}>First Name :  {localStorage.getItem("fname")} <br/>Email : {localStorage.getItem("email")} <br/>Phone:{localStorage.getItem("phone")}</li>
            
              )
          }
        </ul>
          </div>

          </div>
        
       
        
      )
    }
  }

