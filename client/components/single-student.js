import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteStudentThunk } from '../store'

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
            <Link to={`/students/${student.id}/edit`}><button>Edit Student</button></Link>
            <button onClick={props.handleDelete}>Delete Student</button>
            <p>
                <Link to="/students"><button>Back to Students</button></Link>
            </p>
        </div>
    )
}

const mapStateToProps = ({ allStudents, allCampuses }, ownProps) => ({
    singleStudent: allStudents.find(
        student => +student.id === +ownProps.match.params.id
    ),
    campusName: allCampuses.find(campus => +campus.id === +ownProps.match.params.campusId)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDelete(evt) {
        evt.preventDefault()
        const studentId = +ownProps.match.params.id
        dispatch(deleteStudentThunk(studentId))

    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))
