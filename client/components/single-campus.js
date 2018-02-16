import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCampusThunk } from '../store'

function SingleCampus(props) {
    const campus = props.singleCampus
    if (!campus) return <div />

    return (
        <div>
        <h1>Campus: {campus.name} </h1>
            <img src={campus.imageUrl} />
            <h4>Campus Id: {campus.id} </h4>
            <p>{campus.description} </p>
            <Link to={`/campuses/${campus.id}/edit`}><button>Edit Campus</button></Link>
            <button onClick={props.handleDelete}>Delete Campus</button>
            <p>
                <Link to="/campuses"><button>Back to Campuses</button></Link>
            </p>
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
            const campusId = +ownProps.match.params.id
            dispatch(deleteCampusThunk(campusId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus))
