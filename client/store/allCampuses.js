import axios from 'axios'
import history from '../history'

const allCampuses = []

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'

export const getAllCampuses = campuses => ({ type: GET_ALL_CAMPUSES, campuses })

export const fetchAllCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(getAllCampuses(res.data || allCampuses)))
}

export default function (state = allCampuses, action) {
    switch (action.type) {
        case GET_ALL_CAMPUSES:
            return [...allCampuses, ...action.campuses]
        default:
            return state
    }
}