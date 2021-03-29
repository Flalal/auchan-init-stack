import React, { Component } from 'react'
import EmployeeService from '../../services/EmployeeService';

export default class viewComponent extends Component<any,any> {

    constructor(props:any){
        super(props);

        this.state={

            id:this.props.match.params.id,
            firstName:'',
            lastName:'',
            email:''
        }
    }
    componentDidMount()
    {
    
     EmployeeService.getEmployeeById(this.state.id).then((res)=>
     {
        let employee=res.data;
        this.setState({firstName:employee.firstName,
            lastName:employee.lastName,
             email:employee.email
        })
     })
    }
    render()
     {
        return (
            <div>
                {
            <div className="list-group-item">
            <h3 className="list-group-item-heading">
                        {this.state.firstName} {this.state.lastName}

                        <span className="glyphicon glyphicon-minus"></span>

                 </h3>
                        <p className="list-group-item-text"> {this.state.email} </p>
                </div>       
                 }
            </div>
        )
    }
}