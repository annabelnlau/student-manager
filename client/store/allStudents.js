import axios from 'axios'
import history from '../history'

const allStudents = []

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'

export const getAllStudents = students => ({ type: GET_ALL_STUDENTS, students })

export const fetchAllStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => dispatch(getAllStudents(res.data || allStudents)))
        .catch(err => console.log(err))
}

export default function (state = allStudents, action) {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return [...allStudents, ...action.students]
        default:
            return state
    }
}
