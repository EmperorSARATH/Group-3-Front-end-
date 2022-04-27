import { Switch } from "react-router-dom";
import { Route, Link,} from "react-router-dom";
import './style/sidebar.css'
import Login from "./login";
import Category from "./category";
import Add_quiz from "./add_quiz";
import View_alluser from "./view_alluser";
import Remove_user from "./remove_user";


//C:\Users\USER\IdeaProjects\demoexam\src\component\style\sidebar.css
const AdminDashboard = () => {
    return(
        <div className="Heading">
         <h2>Welcome Admin {localStorage.getItem("username")}</h2>

         <div className="container-sidebar">
        

        <ul className="sidebar">
    
            <li><span>ADMIN</span></li>
            {/* <li><span><i className="fa fa-home"></i></span><span>Home</span></li> */}
            <li><span><i className="fa fa-shopping-cart"></i></span><span><Link to='/admin/category' style={{ textDecoration: 'none' }} >Add Category</Link></span></li>
            <li><span><i className="fa fa-users"></i></span><span><Link to='/admin/add_quiz'>Add Quiz</Link></span></li>
            <li><span><i className="fa fa-shopping-cart"></i></span><span><Link to="/admin/view_alluser">View Registered users</Link></span></li>
            {/* <li><span><i className="fa fa-bookmark"></i></span><span>Bookmarks</span></li> */}
            <li><span><i className="fa fa-users"></i></span><span><Link to="/admin/remove_user">Delete User</Link></span></li>
            <li><span><i className="fa fa-gear"></i></span><span><Link to="/login" style={{ textDecoration: 'none' }}>Logout</Link></span></li>
            
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/admin/category" component={Category} />
                <Route exact path='/admin/add_quiz' component={Add_quiz}/>
                <Route exact path='/admin/view_alluser' component={View_alluser} />
                <Route exact path='/admin/remove_user' component={Remove_user} />
               
            </Switch>

        </ul>
        {/* <div>
                <h2>Yo just a test</h2>
                </div> */}

        <div className="content">

        </div>
    </div>





        </div>
    );
}

export default AdminDashboard;