import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../bizlogic/PostData';
class Login extends Component {
constructor(){
super();
this.state = {
UserName: '',
Password: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
if(this.state.UserName && this.state.Password){
PostData('login',this.state).then((result) => {
let responseJson = result;
if(responseJson.userData){
sessionStorage.setItem('userData',JSON.stringify(responseJson));
this.setState({redirectToReferrer: true});
}
else
alert(result.error);
});
}
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/home'}/>)
}
if(sessionStorage.getItem('userData')){
return (<Redirect to={'/home'}/>)
}
return (
<div className="row" id="Body">
<div className="medium-5 columns left">
<h4>Login</h4>
<input type="text" name="username" placeholder="Username" onChange={this.onChange}/><br></br>
<input type="password" name="password" placeholder="Password" onChange={this.onChange}/><br></br>
<input type="submit" className="button" value="Login" onClick={this.login}/><br></br>
<a href="/signup">Registration</a>
</div>
</div>
);
}
}
export default Login;