import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteStudentThunk } from '../store'

function SingleStudent(props) {

    const student = props.singleStudent
    console.log(student, "STUDENTTTT")
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
                {/*<Link to={`/campuses/${student.campusId}`}><button>Back to {student.campus.name}</button></Link>*/}
                <Link to="/students"><button>Back to Students</button></Link>
                <Link to="/campuses"><button>Back to Campuses</button></Link>
            </p>
        </div>
    )
}

const mapStateToProps = ({ allStudents }, ownProps) => ({
    singleStudent: allStudents.find(
        student => +student.id === +ownProps.match.params.id
    )
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleDelete(evt) {
        evt.preventDefault()
        let confirmDelete = confirm('Are you sure you want to delete this student?')
        if (confirmDelete) {
            const studentId = +ownProps.match.params.id
            dispatch(deleteStudentThunk(studentId))
        } else {
            console.log('Deleted Cancelled')
        }
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))
