import React from 'react';
import axios from 'axios';

import './style/view_category.css';
export default class View_category extends React.Component {
    state = {
      categories: []
    }
  
    componentDidMount() {
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
      axios.get(`http://localhost:8080/category/`)
        .then(res => {
          const categories = res.data;
          this.setState({ categories });
          localStorage.setItem('cid',res.data["cid"])
        })
    }
    render() {    
      return (
          <div>
               <ul className='view_ui'>
          {
            this.state.categories
              .map(categories =>
       
                <li  key={categories.cid}>Title: {categories.title} <br/>Description:{categories.description} <br/> Category Id:{categories.cid}<h3>---------------</h3></li>

              )
          }
        </ul>
          </div>
      )
    }
  }