import React from 'react'
import './HomePage.css';
import ListEmployeeComponent from './../component/List-Component/ListEmployeeComponent';
import HeaderComponent from './../component/Header/HeaderComponent';
import FooterComponent from './../component/Footer/FooterComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateEmployeeComponent from './../component/CreateEmployee/CreateEmployeeComponent';
import viewComponent from './../component/View-Employee/ViewComponent';
function HomePage() {
  return (
    <div>
     <Router>
       <div className="container">
      <HeaderComponent/>
      <div className="container">
        <Switch>
          <Route path='/' exact component={ListEmployeeComponent}></Route>
          <Route path='/employees' component={ListEmployeeComponent}></Route>
          <Route path='/add-employee' component={CreateEmployeeComponent}></Route>
          <Route path='/view-employee/:id' component={viewComponent}></Route>
        
        </Switch>
          
      </div>
      <FooterComponent/>
      </div>
      </Router>
    </div>
    
   
  );
}

export default HomePage;
