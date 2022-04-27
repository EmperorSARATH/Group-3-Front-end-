// import React, { Component } from 'react';
// //import swal from 'sweetalert';
// import { Button, TextField, Link } from '@material-ui/core';
// import {ToastNotification} from './notification/ToastNotification';
// import {errorMsg, successMsg, warnMsg} from './notification/ToastNotification';
// const axios = require('axios');
//
// export default class Register extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             registration:{
//                 username: '',
//                 password: '',
//                 email:'',
//                 fname:'',
//                 lname:'',
//                 phone:'',
//
//             }
//
//
//         };
//     }
//
//     onChange = (e) => this.setState({ [e.target.name]: e.target.value });
//
//     register = (e) => {
//         console.log(this.state.registration);
//         e.preventDefault();
//         let self = this;
//         axios.post('http://localhost:8080/user/', self.state.registration)
//             .then(function (response) {
//                 console.log('user registration success response :: ', response);
//                 successMsg('User Registration Successful.');
//                 self.setEmptyRegistrationState();
//                 self.handleDlgClose();
//             })
//             .catch(function (error) {
//                 console.log("user registration error response  :: ", error.response);
//                 if (error.response.status === 302)
//                     warnMsg('Username Already exists. Please try again.');
//                 else
//                     errorMsg('User Registration Failed!')
//             });
//     };
//
//     render() {
//         return (
//             <div style={{ marginTop: '200px' }}>
//                 <div>
//                     <h2>Register</h2>
//                 </div>
//
//                 <div>
//                     <TextField
//                         id="standard-basic"
//                         type="text"
//                         autoComplete="off"
//                         name="username"
//                         value={this.state.username}
//                         onChange={this.onChange}
//                         placeholder="User Name"
//                         required
//                     />
//                     <br /><br />
//                     <TextField
//                         id="standard-basic"
//                         type="password"
//                         autoComplete="off"
//                         name="password"
//                         value={this.state.password}
//                         onChange={this.onChange}
//                         placeholder="Password"
//                         required
//                     />
//                     <br /><br />
//
//
//
//                     <TextField
//                         id="standard-basic"
//                         type="text"
//                         autoComplete="off"
//                         name="fname"
//                         value={this.state.fname}
//                         onChange={this.onChange}
//                         placeholder="First Name"
//                         required
//                     />
//                     <br /><br />
//
//                     <TextField
//                         id="standard-basic"
//                         type="text"
//                         autoComplete="off"
//                         name="lname"
//                         value={this.state.lname}
//                         onChange={this.onChange}
//                         placeholder="Last name"
//                         required
//                     />
//
//                     <br /><br />
//
//                     <TextField
//                         id="standard-basic"
//                         type="text"
//                         autoComplete="off"
//                         name="email"
//                         value={this.state.email}
//                         onChange={this.onChange}
//                         placeholder="Email"
//                         required
//                     />
//                     <br /><br />
//
//
//
//                     <TextField
//                         id="standard-basic"
//                         type="text"
//                         autoComplete="off"
//                         name="phone"
//                         value={this.state.phone}
//                         onChange={this.onChange}
//                         placeholder="phone"
//                         required
//                     />
//
//                     <br /><br />
//                     <Button
//                         className="button_style"
//                         variant="contained"
//                         color="primary"
//                         size="small"
//                         disabled={this.state.username == '' && this.state.password == ''}
//                         onClick={this.register}
//                     >
//                         Register
//                     </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     <Link href="/Users/USER/IdeaProjects/demoexam/public">
//                         Login
//                     </Link>
//                 </div>
//             </div>
//         );
//     }
// }
