import axios from 'axios';
import React,{Component} from 'react'

export default class login extends Component {
    constructor(props){
        super(props);

        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            UserName:"",
            Password:""
        }
    }

    onSubmit(e) {
        e.preventDeafult();

        const obj={
            UserName:this.state.UserName,
            Password:this.state.Password
        };

        axios.post('http://localhost/REACTPHPCRUD/login.php')


        console.log(obj);
    }
    render() {
        return(
            <div style={{marginTop:10}}>
                <h3>Loggin Here!</h3>
                <form>
                    <div className="form-group">
                        <lable>UserName</lable>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="Password" className="form-group"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn login"/>
                    </div>
                </form>

            </div>
        )
    }
}