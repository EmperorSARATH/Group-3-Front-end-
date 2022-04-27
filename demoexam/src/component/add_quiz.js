import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './style/category.css';

export default class Add_quiz extends React.Component{
   
    constructor(props){
         
        super(props);
        
        this.state = {
            title:'',
            description:'',
            maxMarks:'',
            noOfQuestions:'',
            category:{
                cid:'',
                title:'',
                description:''

            }
            
                
            
        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    getCategory(){
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
        axios.get(`http://localhost:8080/category/`)
          .then(res => {
        
            this.setState({cid:res.data.cid ,title:res.data.title,description:res.data.description});
        
          })

    }

    componentWillMount(){
        this.getCategory();
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
        const quiz = {
            
            title : this.state.title,
            description : this.state.description,
            maxMarks:this.state.maxMarks,
            noOfQuestions:this.state.noOfQuestions,
            
            



        };
        console.log(quiz);
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}

        axios.post(`http://localhost:8080/quiz/`,quiz)
        .then(res=>{
            localStorage.setItem("qid",res.data["qid"]);

            //console.log(res)
            console.log(res.data)
            alert("succussfully added")

        })
        .catch((er)=>alert("Quiz cannot be added"))

    }




    render(){
       
        return(
            <div>
                <h2>Add Quiz</h2>
               

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

                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label>Max marks</label>
                        <input type="text" name="maxMarks" onChange={this.handleChange} className="form-control" id="examplemaxMarks" placeholder="maxMarks" value={this.state.maxMarks} required/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label>noOfQuestions</label>
                        <input type="text" name="noOfQuestions" onChange={this.handleChange} className="form-control" id="examplenoOfQuestions" placeholder="noOfQuestions" value={this.state.noOfQuestions} required/>
                    </div>
                </div>

                {/* <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label>title category</label>
                        <input type="text" name="titlecat" onChange={this.handleChange} className="form-control" id="exampletitlecat" placeholder="title ccategory" value={this.state.category.title} required/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-10 spacing">
                        <label>Category Description</label>
                        <input type="text" name="catdescription" onChange={this.handleChange} className="form-control" id="examplecatdescription" placeholder="Description category " value={this.state.category.description} required/>
                    </div>
                </div> */}

                        {/* <div className="form-group">
                            <div className="col-sm-10 spacing">
                                <label>Category ID</label>
                                <input type="text" name="categoryid" onChange={this.handleChange} className="form-control" id="examplecategoryid" placeholder="Category ID" value={this.state.category.cid} required/>
                            </div>
                        </div> */}







                <br/>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <Button type ="submit" className="btn2" variant="contained">Add Quiz</Button>
                    </div>
                </div>
            </form>

                </div>
            </div>
        )
    }
}