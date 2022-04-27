import React from 'react';
import axios from 'axios';
import './style/signup.css'
import Button from '@mui/material/Button';
export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '' ,
            firstname:'',
            lastname:'',
            password :'',
            phone:'',
            username:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value

        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.history.push('/')

        const user = {
            email : this.state.email,
            fName : this.state.fName,
            lname : this.state.lname,
            password : this.state.password,
            phone : this.state.phone,
            userName : this.state.userName

        };
        console.log(user);
        axios.post(`http://localhost:8080/user/`,user)
           // .catch((error) => console.log(error))
           .then(alert("Successfully added"))
            .catch((er)=>alert("user already exists"))

    }



    render(){
        return(
            <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label >Email address</label>
                        <input type="text" name="email" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Email"  value={this.state.email} required />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-10 spacing">
                            <label >First Name</label>
                            <input type="text" name="fName" onChange={this.handleChange} className="form-control" id="firstname" placeholder="First Name" value={this.state.fName} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-10 spacing">
                            <label >Last Name</label>
                            <input type="text" name="lname" onChange={this.handleChange} className="form-control" id="examplelastname" placeholder="Last Name"  value={this.state.lname} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10 spacing">
                            <label >Phone</label>
                            <input type="text" name="phone" onChange={this.handleChange} className="form-control" id="examplephone" placeholder="phone no" value={this.state.phone} required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-10 spacing">
                            <label >User Name</label>
                            <input type="text" name="userName" onChange={this.handleChange} className="form-control" id="exampleusername1" placeholder="User Name" value={this.state.userName} required />
                        </div>
                    </div>

                </div>
                <br/>
                
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        
                    {/* <button type="submit" className="btn btn-default">Submit</button> */}
                    <Button type ="submit" variant="contained">Submit</Button>
                        
                    </div>
                </div>
            
            </form>
            

        )
    }
}