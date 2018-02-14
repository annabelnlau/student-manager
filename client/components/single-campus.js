import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

function SingleCampus(props) {
    const campus = props.singleCampus
    if (!campus) return <div />

    return (
        <div>
            <img src={campus.imageUrl} />
            <h4>Campus: {campus.name} </h4>
            <h4>Campus Id: {campus.id} </h4>
            <h4>{campus.description} </h4>
            <Link to="/campuses"><button>Back to Campuses</button></Link>
        </div>
    )
}

const mapStateToProps = function (state, ownProps) {
    return {
        singleCampus: state.allCampuses.find(campus => campus.id === +ownProps.match.params.id)
    }
}

export default withRouter(connect(mapStateToProps)(SingleCampus))