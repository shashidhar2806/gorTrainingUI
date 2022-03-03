
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/StudentList';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudentComponent from './components/AddStudentComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className= "container">
        <Router>
          <Routes>
          <Route exact path="/" element={<ListStudentComponent />} />
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/addStudent" element={<AddStudentComponent />} />          


              {/* <Route exact path = "/" component = {ListStudentComponent}></Route>
              <Route path = "/students" component = {ListStudentComponent}></Route> */}
              {/* <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route>
              <Route path = "/edit-employee/:id" component = {AddEmployeeComponent}></Route> */}
            </Routes>
            </Router>
        </div>
      <FooterComponent />
    </div>
  );
}

export default App;
