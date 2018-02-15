import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {deleteStudentThunk} from '../store'

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
            <button onClick={props.handleDelete}>Delete Student</button>
            <Link to={`/students/${student.id}/edit`}><button>Edit Student</button></Link>
        </div>
    )
}

const mapStateToProps = ({ allStudents }, ownProps) => ({
    singleStudent: allStudents.find(
        student => +student.id === +ownProps.match.params.id
    )
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDelete(evt){
        evt.preventDefault()
        const studentId = +ownProps.match.params.id
        dispatch(deleteStudentThunk(studentId))

    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))
