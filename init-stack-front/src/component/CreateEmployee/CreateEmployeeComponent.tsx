import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';

export default class CreateEmployeeComponent extends Component<any,any> {
  constructor(props:any){
      super(props);
      this.state={
            firstName:'',
            lastName:'',
            email:''
      }
      this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
      this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
      this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
       this.saveEmployee=this.saveEmployee.bind(this);
    }
  changeFirstNameHandler=(event:any)=>{
    this.setState({firstName:event.target.value})
  }
  changeLastNameHandler=(event:any)=>{
    this.setState({lastName:event.target.value})
  }
  changeEmailIdHandler=(event:any)=>{
    this.setState({email:event.target.value})
  }
  saveEmployee=(e:any)=>{
    e.preventDefault();
    let employee={firstName:this.state.firstName,
        lastName:this.state.lastName,
        email:this.state.email};
        console.log('employee=>' + JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then(res=>{
         this.props.history.push('/employees');  
        })
  }
  cancel(){
      this.props.history.push('/employees');
  }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row my-5">
             <div className="card col-md-6 offset-md-3">
             
                    <h3 className="col-md-6">Add Employee</h3>
                 
                  <div className="card-body">
                      <form action="">
                           <div className="form-group">
                               <label>First Name</label>
                               <input placeholder="First Name" name="firstName" className="form-control"
                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                           </div>
                           <div className="form-group">
                               <label>Last Name</label>
                               <input placeholder="Last Name" name="lastName"
                               
                               
                               className="form-control"
                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                           </div>
                           <div className="form-group">
                               <label htmlFor ="emailId">Email</label>
                               <input placeholder="Email " name="emailId" className="form-control"
                               value={this.state.email} onChange={this.changeEmailIdHandler}/>
                           
                           </div>
                               <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                      </form>
                  </div>
                 </div>           
                    </div>
                </div>

            </div>
        )
    }
}
