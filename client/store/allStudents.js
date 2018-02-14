import axios from 'axios'
import history from '../history'

const allStudents = []

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT'
const SET_STUDENT = 'SET_STUDENT'

export const getAllStudents = students => ({ type: GET_ALL_STUDENTS, students })
export const addNewStudent = student => ({type: ADD_NEW_STUDENT, student})
export const setStudent = student => ({type: SET_STUDENT, student})

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

export default function (state = allStudents, action) {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return [...allStudents, ...action.students]
        case ADD_NEW_STUDENT:
            return [...state, action.student]
        case SET_STUDENT:
            return [...state, action.student]
        default:
            return state
    }
}
