import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Switch } from "react-router-dom";
import { Route, Link,} from "react-router-dom";
import View_category from './view_category';
import './style/category.css';

export default class Category extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            title:'',
            description:'',
        
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
        const category = {
            
            title : this.state.title,
            description : this.state.description,
        };
        console.log(category);
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}

        axios.post(`http://localhost:8080/category/`,category)
        .then(res=>{
            localStorage.setItem("cid",res.data["cid"]);
            localStorage.setItem("title",res.data["title"]);
            localStorage.setItem("description",res.data["description"]);

            //console.log(res)
            console.log(res.data)
            alert("succussfully added")

        })
        .catch((er)=>alert("Category cannot be added"))

    }




    render(){
        
        return(
            <div>
                <h2>This is category</h2>
               

                <div>

                <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label >Title</label>
                         <input type="text" name="title" onChange={this.handleChange} className="form-control" id="exampletitle" placeholder="title" value={this.state.title}  required />
                      
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label>Description</label>
                        <input type="text" name="description" onChange={this.handleChange} className="form-control" id="exampledescription" placeholder="Description" value={this.state.description} required/>
                    </div>
                </div>

                <br/>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                         <Button type="submit" className='btn' variant="contained" ><Link to="/admin/view-category" style={{ textDecoration: 'none' ,color:'orange' }} >View category</Link></Button> 
                        <Button type ="submit" className="btn2" variant="contained">Add Category</Button>

                        <Switch>
                <Route exact path="/admin/view-category" component={View_category} />
            </Switch>
                    </div>
                </div>
            </form>

                </div>
            </div>
        )
    }
}