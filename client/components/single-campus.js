import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCampusThunk } from '../store'

function SingleCampus(props) {
    const campus = props.singleCampus
    if (!campus) return <div />

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1>{campus.name}</h1>
                <img src={campus.imageUrl} />
                <h4>Campus Id: {campus.id} </h4>
                <p>{campus.description} </p>

                <h1>Student List</h1>
                <ul>{
                    (campus.students) && campus.students.map(student => <li key={student.id}><Link to={`/students/${student.id}`}>{student.name}</Link></li>)
                }
                </ul>
                <Link to={`/campuses/${campus.id}/edit`}><button>Edit Campus</button></Link>
                <p><button className="btn btn-outline-danger" onClick={props.handleDelete}>Delete Campus</button></p>
                <p>
                    <Link to="/campuses"><button>Back to Campuses</button></Link>
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = function (state, ownProps) {
    return {
        singleCampus: state.allCampuses.find(campus => campus.id === +ownProps.match.params.id)
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleDelete(evt) {
            evt.preventDefault()
            let confirmDelete = confirm('Are you sure you want to delete this campus?')
            if (confirmDelete) {
                const campusId = +ownProps.match.params.id
                dispatch(deleteCampusThunk(campusId))
            } else {
                console.log('Delete Cancelled')
            }
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus))
