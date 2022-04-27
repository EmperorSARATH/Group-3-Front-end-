import React from 'react';
import axios from 'axios';
import './style/signup.css'
import { Redirect } from "react-router-dom";
import Button from '@mui/material/Button';


//import Dashboard from './Dashboard';
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value,
            redirect: false
  
       

        });
    }
    handleSubmit(event){
        event.preventDefault();
        //this.props.history.push('/login/Dashboard')
        const user = {
            
            username : this.state.username,
            password : this.state.password
        };
        console.log(user);
    
        axios.post(`http://localhost:8080/generate-token`,user)
        .then(res=>{
            localStorage.setItem("token",res.data["token"]);
            localStorage.setItem("username",user.username);
            localStorage.setItem("loggedIn",true);


            //console.log(res)
            console.log(res.data)

        }).then(() => this.setState({ redirect: true }))
        .catch((er)=>alert("user not found"))

    }
    render(){
        
        const { redirect } = this.state;
        
       
        if (redirect) {
            if(this.state.username==="Sarathdgr8" & this.state.password==="1234"){
                
                return <Redirect to='/login/AdminDashboard'/>;
            }
          return <Redirect to='/login/Dashboard'/>;
        }
        // if (this.state.username==="Sarathdgr8"){
        //     return <Redirect to='/login/AdminDashboard'/>;
            
        // }
       
        
        return(
       

            <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label >UserName</label>
                         <input type="text" name="username" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="User Name"  value={this.state.username} required />
                      
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>
                    </div>
                </div>

                <br/>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        {/* <button type="submit" className="btn btn-default">Login</button> */}
                        <Button type ="submit" variant="contained">Log In</Button>
                    </div>
                </div>
            </form>

        )
    }
}