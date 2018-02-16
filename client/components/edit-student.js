import React from 'react'
import { connect } from 'react-redux'
import { editStudentThunk } from '../store'
import { Link } from 'react-router-dom'


function EditStudent(props) {
    const studentToEdit = props.singleStudent
    if (!studentToEdit) return <div />
    return (
        <div>
            <h1>Edit Student: {studentToEdit.name}</h1>
            <p>Please complete every field.</p>
            <div>
                <form onSubmit={props.handleEditSubmit}>
                    <div>
                        <label htmlFor="firstName">
                            <small>First Name</small>
                        </label>
                        <input
                            name="firstName"
                            type="text"
                            onChange={props.handleChange}
                            defaultValue={studentToEdit.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName">
                            <small>Last Name</small>
                        </label>
                        <input
                            name="lastName"
                            type="text"
                            defaultValue={studentToEdit.lastName} />
                    </div>
                    <div>
                        <label htmlFor="email">
                            <small>Email</small>
                        </label>
                        <input
                            name="email"
                            type="text"
                            defaultValue={studentToEdit.email} />
                    </div>
                    <div>
                        <label htmlFor="gpa">
                            <small>GPA</small>
                        </label>
                        <input
                            name="gpa"
                            type="text"
                            defaultValue={studentToEdit.gpa} />
                    </div>
                    <div>
                        <label htmlFor="campusId">
                            <small>Campus Id</small>
                        </label>
                        <input
                            name="campusId"
                            type="text"
                            defaultValue={studentToEdit.campusId} />
                    </div>
                    <button type="submit" className="btn-success">
                        Submit Changes
            </button>
                    <p>
                        <Link to={`/students/${studentToEdit.id}`}><button>Back to Student</button></Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = function ({ allStudents }, ownProps) {
    return {
        singleStudent: allStudents.find(student => +student.id === +ownProps.match.params.id)
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    
    return {
        handleChange(evt){

        },
        handleEditSubmit(evt) {
            evt.preventDefault()
            const studentId = +ownProps.match.params.id
            const editedStudent = {
                firstName: evt.target.firstName.value,
                lastName: evt.target.lastName.value,
                email: evt.target.email.value,
                gpa: evt.target.gpa.value,
                campusId: evt.target.campusId.value
            }
            dispatch(editStudentThunk(editedStudent, studentId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)
