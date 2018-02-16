import axios from 'axios'
import history from '../history'

const allCampuses = []

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const EDIT_CAMPUS = 'EDIT_CAMPUS'

export const getAllCampuses = campuses => ({ type: GET_ALL_CAMPUSES, campuses })
export const addNewCampus = campus => ({ type: ADD_NEW_CAMPUS, campus })
export const deleteCampus = campusId => ({ type: DELETE_CAMPUS, campusId })
export const editCampus = campus => ({type: EDIT_CAMPUS, campus })

export const fetchAllCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(getAllCampuses(res.data || allCampuses)))
        .catch(err => console.log(err))
}

export const addNewCampusThunk = (newCampus) => dispatch => {
    axios.post('/api/campuses', newCampus)
        .then(res => dispatch(addNewCampus(res.data)))
        .catch(err => console.log(err))
}

export const deleteCampusThunk = (campusId) => dispatch => {
    axios.delete(`/api/campuses/${campusId}`)
        .then(res => {
            axios.get('/api/campuses')
            dispatch(deleteCampus(res.data))
            history.push('/campuses')
        })
        .catch(err => console.log(err))
}

export const editCampusThunk = (campus, campusId) => dispatch => {
    axios.put(`/api/campuses/${campusId}`, campus)
    .then(res => {
        dispatch(editCampus(res.data))
        history.push(`/campuses/${campusId}`)
    })
    .catch(err => console.log(err))
}

export default function (state = allCampuses, action) {
    switch (action.type) {
        case GET_ALL_CAMPUSES:
            return [...allCampuses, ...action.campuses]
        case ADD_NEW_CAMPUS:
            return [...state, action.campus]
        case DELETE_CAMPUS:
            return state.filter(campus => campus.id !== +action.campusId)
        case EDIT_CAMPUS:
            let index = state.findIndex(campus => campus.id === +action.campus.id)
            let copyCampuses = state.slice(0)
            copyCampuses[index] = action.campus
            return copyCampuses
        default:
            return state
    }
}
