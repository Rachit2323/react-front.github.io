import React,{Component} from "react";
import {list} from "./apiUser";
import DefaultProfile from "../images/avatar.png";
import { Link } from "react-router-dom";
import {read,update,updateUser} from "./apiUser";
import {Redirect} from "react-router-dom";


class Users extends Component{
constructor(){
    super()
    this.state={
        users:[]
    }
}
componentDidMount(){
    list().then(data => {
        if(data.error){
            console.log(data.error);
        }else{
            this.setState({users:data});
        }

    });
}

renderUsers=(users)=>(
    <div className="row">
                    {
                        users.map((user,i)=>(
                        <div class="card col-md-4"  key={i}>
                        <img style={{height:"200px",width:"auto"}}  className="img-thumbnail" src={`${process.env.REACT_APP_API_URL}/user/photo${user._id}`} 
                           onError={i=>(i.target.src=`${DefaultProfile}`)}
                        alt={user.name}/>
                            <div className="card-body">
                              <h5 className="card-title" >{user.name}</h5>
                              <p className="card-text">{user.technology}</p>
                              <p className="card-text">{user.email}</p>
                              
                              <Link to={`/user/${user._id}`}
                               className="btn btn-raised btn-primary btn-sm">View Profileeeee</Link>
  </div>
</div>
                    ))}
                </div>

);
    render(){
        const {users}=this.state
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">User</h2>
                {this.renderUsers(users)}
            </div>
        );
    }
}

export default Users;