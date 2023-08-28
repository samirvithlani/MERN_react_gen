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
import { LoginComponent } from "./components/LoginComponent";
import ProtectedRoute from "./hooks/ProtectedRoutes";
import { ApiDemo1 } from "./components/ApiDemo1";
import { ApiDemo2 } from "./components/ApiDemo2";
import { ApiDemo3 } from "./components/ApiDemo3";
import { ApidDemo4 } from "./components/ApidDemo4";
import { ApiDemo5 } from "./components/ApiDemo5";
import { ApiDemo6 } from "./components/ApiDemo6";
import { UserComponentQ } from "./components/UserComponentQ";
import { Counter } from "./components/Counter";
import axios from "axios";
import { AddUserWithQ } from "./components/AddUserWithQ";
import { JsonForm } from "./components/JsonForm";
import { ButtonDemo } from "./mui/ButtonDemo";

function App() {
  var title = "Royal technosoft";
  var addresss = "Ahmedabad";

  //pure js
  var name = "Amit";
  var age = 30;
  var isMarried = true;
  var student = {
    name: "naveen",
    marks: 10,
  };

  var style = {
    color: "red",
  };

  axios.defaults.baseURL = "https://node5.onrender.com";
  //axios.defaults.baseURL = "http://localhost:3001";
  return (
    <div className="App">
      <Header headertitle={title} />
      
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Route>

        <Route path="/contactus/manager" element={<Manager />}></Route>
        <Route path="/contactus/ceo" element={<Ceo />}></Route>
        <Route path="/contactus/director/:id" element={<Director />}></Route>
        <Route path="/store" element={<StoreData />}></Route>
        <Route path="/getstoredata" element={<GetStorageDate />}></Route>
        <Route path ="/apidemo1" element={<ApiDemo1/>}></Route>
        <Route path ="/apidemo2" element={<ApiDemo2/>}></Route>
        <Route path ="/apidemo3" element={<ApiDemo3/>}></Route>
        <Route path ="/apidemo4" element={<ApidDemo4/>}></Route>
        <Route path ="/apidemo5" element={<ApiDemo5/>}></Route>
        <Route path ="/update/:id" element={<ApiDemo6/>}></Route>
        <Route path = "/usercompq" element={<UserComponentQ/>}></Route>
        <Route path = "/adduserq" element={<AddUserWithQ/>}></Route>
        <Route path = "/jsonform" element = {<JsonForm/>}></Route>
        <Route path="/buttondemo" element={<ButtonDemo/>}></Route>
        <Route path="/" element={<DashBoard />}></Route>
        {/* <Route path ="/*" element ={<PagenotFound/>}></Route> */}
        <Route path="/*" element={<h1>PAGE NOT FOUND</h1>}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
