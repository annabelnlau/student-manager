import axios from 'axios'
import history from '../history'

const allStudents = []

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'


export const getAllStudents = students => ({ type: GET_ALL_STUDENTS, students })
export const addNewStudent = student => ({ type: ADD_NEW_STUDENT, student })
export const deleteStudent = studentId => ({ type: DELETE_STUDENT, studentId })


export const fetchAllStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => dispatch(getAllStudents(res.data || allStudents)))
        .catch(err => console.log(err))
}

export const addNewStudentThunk = (newStudent) => dispatch => {
    axios.post('/api/students', newStudent)
        .then(res => dispatch(addNewStudent(res.data)))
        .catch(err => console.log(err))
}

export const deleteStudentThunk = (studentId) => dispatch => {
    axios.delete(`/api/students/${studentId}`)
        .then(res => {
            axios.get('/api/students')
            dispatch(deleteStudent(res.data))
            history.push('/students')
        })
}


export default function (state = allStudents, action) {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return [...allStudents, ...action.students]
        case ADD_NEW_STUDENT:
            return [...state, action.student]
        case DELETE_STUDENT:
            return state.filter(student => student.id !== +action.studentId)
        default:
            return state
    }
}
