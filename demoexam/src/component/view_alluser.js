import React from 'react';
import axios from 'axios';

import './style/view_category.css';
import './style/view_profile.css';



export default class View_alluser extends React.Component {
    state = {
      users: []
    }
  
    componentDidMount() {
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
      axios.get(`http://localhost:8080/user/`)
        .then(res => {
          const users = res.data;
         // console.log(users);
          // for (const [key, value] of Object.entries(users)) {
          //  // console.log(`key: ${key}, value: ${value.fName}`)
          // }
          
          //console.log(res.data.fName);
          localStorage.setItem("fName",res.data["fName"]);
         // console.log("hellooo");
           this.setState({users});
        }).catch((er)=>alert("some error"))
    }
  
    render() {
        
      return (
  
      <div>
        <h1>Profile Details</h1>
          <div className='view_profile'>
            
               <ul className='view_ui'>
          {
            console.log(this.state.users)
          }
          {
            this.state.users
              .map((users) =>
       
                <li  key={users.id}>First Name : {users.fName} || UId:{users.id} </li>
                
            
              )
          }
        
        </ul>
          </div>

          </div>
        
       
        
      )
    }
  }

