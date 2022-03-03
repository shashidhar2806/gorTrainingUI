import React, {useState} from 'react'
import StudentService from '../services/StudentService'

const AddStudentComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
  //  const history = useHistory();


    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        const student = {name, email, number};

        StudentService.createStudent(student).then((response) =>{
         //   history.push('/');
            console.log("resp : " + response.data);

        } ).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Number :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Number"
                                        name = "number"
                                        className = "form-control"
                                        value = {number}
                                        onChange = {(e) => setNumber(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateStudent(e)} >Submit </button>
                                {/* <Link to="/employees" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddStudentComponent;