import axios from 'axios'

const STUDENT_BASE_REST_API = 'http://localhost:8080/studentList';
const STUDENT_CREATE_REST_API = 'http://localhost:8080/saveStudent';

class StudentService{

    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API);
    }

    createStudent(student){
        return axios.post(STUDENT_CREATE_REST_API);
    }
}

export default new StudentService();