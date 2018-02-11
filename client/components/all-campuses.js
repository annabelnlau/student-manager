import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

function AllCampuses(props){
    return (
        <div>
        <h1>All Campuses</h1>
        <ul>
        {
            props.allCampuses && props.allCampuses.map(campus => {
                return (
                    <li key={campus.id}>
                    {campus.name}
                    </li>
                )
            })
        }
        </ul>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
        allCampuses: state.allCampuses,
        currentUser: state.user
    }
}

export default connect(mapStateToProps, null)(AllCampuses)