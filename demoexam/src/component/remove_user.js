import React, { Component } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
export default class Remove_user extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            uid: []
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ uid: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
        
      axios.delete(`http://localhost:8080/user/${localStorage.getItem('id')}`).then(res => {
        alert("Deleted !!")
      })
       
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
   
        if (localStorage.getItem('user')) {
            this.setState({
                uid: this.userData.id
                
            })
     
        } else {
            this.setState({
               
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User ID</label>
                        <input type="text" className="form-control" value={this.state.id }  onChange={this.onChangeName} />
                        {localStorage.setItem("id",this.state.uid)}
                    </div>
    
                    <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                </form>
            </div>
        )
    }
}