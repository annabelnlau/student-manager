import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { fetchAllPromoCodes } from '../store'


function AllStudents(props){
    console.log("PROPS:", props)
    return (
        <div>
        <h1>All Students</h1>
        <ul>
        {
            props.allStudents && props.allStudents.map(student => {
                return (
                    <li key={student.id}>
                    {student.name}
                    </li>
                )
            })
        }
        </ul>
        </div>
    )
}

const mapStateToProps = function(state){
    return {
        allStudents: state.allStudents,
        currentUser: state.user
    }
}

export default connect(mapStateToProps, null)(AllStudents)
