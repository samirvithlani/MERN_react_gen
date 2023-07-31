import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { UserList } from "./components/UserList";
import { Student } from "./components/students/Student";
import { Employee } from "./propsdemo/Employee";
import { UserForm } from "./components/UserForm";
import { EmployeeForm } from "./components/EmployeeForm";
import { StudentReg } from "./components/StudentReg";
import { ProductReg } from "./components/ProductReg";
import { AddStudent } from "./components/students/AddStudent";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/students/ContactUs";
import { Manager } from "./components/Manager";
import { Ceo } from "./components/Ceo";
import { DashBoard } from "./components/DashBoard";
import { PagenotFound } from "./components/PagenotFound";
import { Director } from "./components/Director";
import { StoreData } from "./components/StoreData";
import { GetStorageDate } from "./components/GetStorageDate";

function App() {

  var title = "Royal technosoft";
  var addresss ="Ahmedabad"
  
  //pure js
  var name = "Amit";
  var age = 30;
  var isMarried = true;
  var student = {
    name: "naveen",
    marks: 10,
  }

  var style = {
    color:"red",
  }
  return (
    <div className="App">
      <Header headertitle = {title}/>
      <Routes>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path ="/contactus" element ={<ContactUs/>}></Route>
        <Route path ="/contactus/manager" element ={<Manager/>}></Route>
        <Route  path = "/contactus/ceo" element ={<Ceo/>}></Route>
        <Route path ="/contactus/director/:id" element ={<Director/>}></Route>
        <Route path = "/store" element = {<StoreData/>}></Route>
        <Route path="/getstoredata" element ={<GetStorageDate/>}></Route>
        <Route path ="/" element = {<DashBoard/>}></Route>
        {/* <Route path ="/*" element ={<PagenotFound/>}></Route> */}
        <Route path = "/*" element = {<h1>PAGE NOT FOUND</h1>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
