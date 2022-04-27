// import React, {Component} from 'react';
// import {ToastNotification} from './ToastNotification';
// import {errorMsg, successMsg, warnMsg} from './ToastNotification';
// import axios from 'axios';
// //import api from '../../api'
//
// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             login: {
//                 username: '',
//                 password: '',
//             },
//             registration: {
//                 userName: '',
//                 password: '',
//                 roles: ''
//             },
//             openDlgFlg: false
//         }
//     }
//
//     login = (e) => {
//         e.preventDefault();
//         let self = this;
//         axios.post('/api/auth/login', self.state.login)
//             .then(function (response) {
//                 //---set Authorization header ---
//                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
//                 //token store in session storage
//                 sessionStorage.setItem('token', response.data.token);
//                 self.props.history.push('/');
//             })
//             .catch(function (error) {
//                 errorMsg('Invalid Credentials! Please Enter Valid Credentials.');
//                 console.log("login error response :: ", error);
//             });
//     };
//
//     userRegistration = (e) => {
//         console.log(this.state.registration);
//         e.preventDefault();
//         let self = this;
//         axios.post('/api/user', self.state.registration)
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
//     setEmptyRegistrationState() {
//         const {registration} = this.state;
//         registration.userName = '';
//         registration.password = '';
//         registration.roles = '';
//         this.setState({registration});
//     }
//
//     // --------- Dialog open/close--------
//     handleDlgClose() {
//         this.setState({openDlgFlg: false});
//     };
//
//     handleDlgShow() {
//         this.setState({openDlgFlg: true});
//     };
//
//
//     render() {
//         const {login, registration, openDlgFlg} = this.state;
//         return (
//             <div style={{ marginTop: '200px' }}>
//                                <div>
//                                    <h2>Register</h2>
//                                  </div>
//
//                                 <div>
//                                     <TextField
//                                         id="standard-basic"
//                                         type="text"
//                                         autoComplete="off"
//                                         name="username"
//                                         value={this.state.username}
//                                         onChange={this.onChange}
//                                         placeholder="User Name"
//                                         required
//                                     />
//                                     <br /><br />
//                                     <TextField
//                                         id="standard-basic"
//                                         type="password"
//                                         autoComplete="off"
//                                         name="password"
//                                         value={this.state.password}
//                                         onChange={this.onChange}
//                                         placeholder="Password"
//                                         required
//                                     />
//                                     <br /><br />
//
//
//
//                                     <TextField
//                                         id="standard-basic"
//                                         type="text"
//                                         autoComplete="off"
//                                         name="fname"
//                                         value={this.state.fname}
//                                         onChange={this.onChange}
//                                         placeholder="First Name"
//                                         required
//                                     />
//                                     <br /><br />
//
//                                     <TextField
//                                         id="standard-basic"
//                                         type="text"
//                                         autoComplete="off"
//                                         name="lname"
//                                         value={this.state.lname}
//                                         onChange={this.onChange}
//                                         placeholder="Last name"
//                                         required
//                                     />
//
//                                     <br /><br />
//
//                                     <TextField
//                                         id="standard-basic"
//                                         type="text"
//                                         autoComplete="off"
//                                         name="email"
//                                         value={this.state.email}
//                                         onChange={this.onChange}
//                                         placeholder="Email"
//                                         required
//                                     />
//                                     <br /><br />
//
//
//
//                                     <TextField
//                                         id="standard-basic"
//                                         type="text"
//                                         autoComplete="off"
//                                         name="phone"
//                                         value={this.state.phone}
//                                         onChange={this.onChange}
//                                         placeholder="phone"
//                                         required
//                                     />
//
//                                     <br /><br />
//                                     <Button
//                                         className="button_style"
//                                         variant="contained"
//                                         color="primary"
//                                         size="small"
//                                         disabled={this.state.username == '' && this.state.password == ''}
//                                         onClick={this.register}
//                                     >
//                                         Register
//                                     </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                     <Link href="/Users/USER/IdeaProjects/demoexam/public">
//                                         Login
//                                     </Link>
//                                 </div>
//                              </div>
//         )
//     };
// }
//
// export default Login;
