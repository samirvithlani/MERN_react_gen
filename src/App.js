import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { UserList } from "./components/UserList";
import { Students } from "./propsdemo/Students";
import { Employee } from "./propsdemo/Employee";
import { UserForm } from "./components/UserForm";
import { EmployeeForm } from "./components/EmployeeForm";

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
      {/* <UserForm/> */}
      <EmployeeForm/>
      {/* <Employee/> */}
      {/* <Students t = {title} add = {addresss} style = {style}/> */}
      {/* <Header/>
      <h1>APP</h1>
      <h2>Name = {name}</h2>
      <h3>Age = {age}</h3>
      <h4>married {isMarried === true ? "Married":"Not Married"}</h4>
      <h4>{isMarried === true ? <p>Married</p>:"Not Married"}</h4>
      <h1>{student.name}</h1>
      {
        student.marks >= 80 ? <h1 style={{color:"green"}}>Grade A</h1>:<h1 style={style}>Grade B</h1>
      }
      <Footer/> */}
      {/* <UserList/> */} 
      {/* how to iterate daat using loop */}
    </div>
  );
}

export default App;
