import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

function SingleStudent(props) {

    const student = props.singleStudent

    if (!student) return <div />
    return (
        <div>
            <h4>Name: {student.name} </h4>
            <h4>Student Id: {student.id} </h4>
            <h4>Email: {student.email} </h4>
            <h4>GPA: {student.gpa}</h4>
            <h4>Campus: {student.campusId}</h4>
            <Link to="/students"><button>Back to Students</button></Link>
        </div>
    )
}

const mapStateToProps = ({ allStudents }, ownProps) => ({
    singleStudent: allStudents.find(
        student => +student.id === +ownProps.match.params.id
    )
})

export default withRouter(connect(mapStateToProps)(SingleStudent))
