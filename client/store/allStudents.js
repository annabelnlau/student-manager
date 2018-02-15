import axios from 'axios'
import history from '../history'

const allStudents = []

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const EDIT_STUDENT = 'EDIT_STUDENT'


export const getAllStudents = students => ({ type: GET_ALL_STUDENTS, students })
export const addNewStudent = student => ({ type: ADD_NEW_STUDENT, student })
export const deleteStudent = studentId => ({ type: DELETE_STUDENT, studentId })
export const editStudent = student => ({ type: EDIT_STUDENT, student })

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
        .catch(err => console.log(err))
}

export const editStudentThunk = (student, studentId) => dispatch => {
    axios.put(`/api/students/${studentId}`, student)
        .then(res => {
            dispatch(editStudent(res.data))
            history.push(`/students/${studentId}`)
        })
        .catch(err => console.log(err))
}


export default function (state = allStudents, action) {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return [...allStudents, ...action.students]
        case ADD_NEW_STUDENT:
            return [...state, action.student]
        case DELETE_STUDENT:
            return state.filter(student => student.id !== +action.studentId)
        case EDIT_STUDENT:
            let index = state.findIndex(student => {
                return student.id === +action.student.id
            })
            let copyStudents = state.slice(0)
            copyStudents[index] = action.student
            return copyStudents
        default:
            return state
    }
}
