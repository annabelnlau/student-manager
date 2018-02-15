import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {editStudentThunk} from '../store'


function EditStudent(props) {
    const studentToEdit = props.singleStudent
    if (!studentToEdit) return <div />
    return (
        <div>
            <h1>Edit {studentToEdit.name}'s Profile</h1>
            <div>
            <form onSubmit={props.handleEditSubmit}>
            <div>
              <label htmlFor="firstName">
                <small>First Name</small>
              </label>
              <input name="firstName" type="text" />
            </div>
            <div>
              <label htmlFor="lastName">
                <small>Last Name</small>
              </label>
              <input name="lastName" type="text" />
            </div>
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" />
            </div>
            <div>
              <label htmlFor="gpa">
                <small>GPA</small>
              </label>
              <input name="gpa" type="text" />
            </div>
            <div>
              <label htmlFor="campusId">
                <small>Campus Id</small>
              </label>
              <input name="campusId" type="text" />
            </div>
            <button type="submit" className="btn-success">
              Submit Changes
            </button>
          </form>
          </div>
        </div>
    )
}

const mapStateToProps = function({allStudents}, ownProps){
    return {
        singleStudent: allStudents.find(student => +student.id === +ownProps.match.params.id)
    }
}

const mapDispatchToProps = function(dispatch, ownProps){
    return {
        handleEditSubmit(evt){
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditStudent))
