import axios from 'axios'
import history from '../history'

const allCampuses = []

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS'

export const getAllCampuses = campuses => ({ type: GET_ALL_CAMPUSES, campuses })
export const addNewCampus = campus => ({type: ADD_NEW_CAMPUS, campus})

export const fetchAllCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(getAllCampuses(res.data || allCampuses)))
}

export const addNewCampusThunk = (newCampus) => dispatch => {
    axios.post('/api/campuses', newCampus)
    .then(res => dispatch(addNewCampus(res.data)))
}

export default function (state = allCampuses, action) {
    switch (action.type) {
        case GET_ALL_CAMPUSES:
            return [...allCampuses, ...action.campuses]
        case ADD_NEW_CAMPUS:
            return [...state, action.campus]
        default:
            return state
    }
}
