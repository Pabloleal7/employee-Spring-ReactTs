import { useState } from "react";
import { Tweet } from "./components/Tweet";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { AddEmployee } from "./components/AddEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  /* 
  const [tweets,setTweets] = useState<String[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'

  ]) */

  /* function createTweet(){
    setTweets([...tweets, 'Tweet 5'])
  } */

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />}></Route>
          <Route path="/addEmployee" element={<AddEmployee/>}></Route>
          <Route path="/updateEmployee/:id" element={<UpdateEmployee/>}></Route>

        </Routes>
       {/*  <AddEmployee />
        <EmployeeList /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
