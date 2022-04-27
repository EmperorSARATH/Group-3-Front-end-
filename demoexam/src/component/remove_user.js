import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

export default class Remove_user extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            uid:'',
        };
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       

    }
   

    handleChange(event){
        
        this.setState({
            [event.target.name] : event.target.value,
        });
    }
    handleSubmit(event){
        event.preventDefault();
        //this.props.history.push('/login/Dashboard')
        const user = {
            
            uid : this.state.uid
        
        };
        console.log(user);
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
    
        axios.delete(`http://localhost:8080/user/${JSON.parse(localStorage.getItem("contact_form['userid']"))}`)
        .then(res=>{
  
            //console.log(res)
            console.log(res.data)

        })
        .catch((er)=>alert("could not remove user"))

    }


    componentDidMount() {
        this.DATA = JSON.parse(localStorage.getItem('contact_form'));

        if (localStorage.getItem('contact_form')) {
            this.setState({
                userid: this.DATA.userid,
            })
        } else {
            this.setState({
                userid: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('contact_form', JSON.stringify(nextState));
    }

    render(){
      
        return(
            <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit}>
                <div><h1>Remove user</h1></div>
                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label >UserId</label>
                         <input type="text" name="userid" onChange={this.handleChange} className="form-control" id="exampleuserid" placeholder="User Id"  defaultValue={this.state.uid} required />
                      
                    </div>
                </div>

                <br/>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <Button type ="submit" variant="contained">remobve User</Button>
                    </div>
                </div>
            </form>
     
        )
    }
}