import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService.js'

const ListStudentComponent = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {

        getAllStudents();
    }, [])

    const getAllStudents = () => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

/*    const deleteStudnt = (studentId) => {
       StudentService.deleteStudent(studentId).then((response) =>{
        getAllStudents();

       }).catch(error =>{
           console.log(error);
       })
        
    } */

    return (
        <div className = "container">
            <h2 className = "text-center"> List Student </h2>
            <Link to = "/addStudent" className="btn btn-primary mb-2">Add Student</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Student Id </th>
                    <th> Student Name </th>
                    <th> Student Number </th>
                    <th> Student Email </th>
                </thead>
                <tbody>
                    {
                        students.map(
                            student =>
                            <tr key = {student.id}> 
                                <td> {student.id} </td>
                                <td> {student.name} </td>
                                <td>{student.number}</td>
                                <td>{student.email}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponent