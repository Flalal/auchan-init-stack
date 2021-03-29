import axios from 'axios';

const EMPLOYEE_API_BASE_URL="http://localhost:8080/api"

class EmployeeService{
    getEmployees(){
        return axios.get( EMPLOYEE_API_BASE_URL + "/employes");
    }
    
    createEmployee(employee:any){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    getEmployeeById(employeeId:number){
        return axios.get(EMPLOYEE_API_BASE_URL +'/employes/'+employeeId);
    }

    deleteEmployeeById(employeeId:number){
        return axios.delete(EMPLOYEE_API_BASE_URL +'/employes/'+employeeId);
    }
}
export default new EmployeeService();