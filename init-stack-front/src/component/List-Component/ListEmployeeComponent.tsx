import React, {Component} from 'react'
import EmployeeService from '../../services/EmployeeService';

export default class ListEmployeeComponent extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state={
            employees:[]
        }  
       
     this.addEmployee=this.addEmployee.bind(this);
     this.viewEmployee=this.viewEmployee.bind(this);
     
     }
     viewEmployee(id:number){
         this.props.history.push(`/view-employee/${id}`)
      }
     deleteEmployee(id:number){
        EmployeeService.deleteEmployeeById(id);
        this.props.history.push('/employee');
      }
    componentDidMount()
        {
            EmployeeService.getEmployees().then((res)=>
            {
                this.setState({ employees: res.data});
            });
        }
     addEmployee(){
         this.props.history.push('/add-employee');
     }
    
     render() {
         return (
             <div>
                 <h2>Employees Management</h2>
                 <div className="row my-3">
                    <div className="col-md-12 text-right">
                         <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                     </div>
                 </div>
                 <div className="row">
                     <table className="table table-striped table-bordered">
                         <thead>
                             <tr>
                                 <th>First Name</th>
                                 <th>Last Name</th>
                                 <th>Email</th>
                                 <th>Actions</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.state.employees.map(
                                     employee =>
                                     <tr key={employee.id}>
                                         <td>{employee.firstName}</td>
                                         <td>{employee.lastName}</td>
                                         <td>{employee.email}</td>
                                          <td>
                                              <div className="text-center">
                                              <button  onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger ">Delete</button>
                                              <button  onClick={()=>this.viewEmployee(employee.id)} className="btn btn-success">View</button>
                                              </div>
                                          </td>
                                     </tr>
 
                                 )
                             }
 
                         </tbody>
                     </table>
                 </div>
             </div>
         )
     }
 }