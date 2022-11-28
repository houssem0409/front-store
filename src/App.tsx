import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render } from 'react-dom';
import SignUp from "./components/SignUp"
import SignIn from './components/SignIn';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import AddProduct from './pages/AddProduct';
export  default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
            <Route path="/"  element={<SignIn/>} />   
            <Route path="/SignUp"  element={<SignUp/>} />  
            <Route path="/Products"  element={<Products/>} />   
            <Route path="/Orders"  element={<Orders/>} />  
            <Route path="/Profile"  element={<Profile/>} /> 
            <Route path="/AddProduct"  element={<AddProduct/>} /> 
      </Routes>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
