import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { addNewStudentThunk, fetchAllStudents } from '../store'


class AllStudents extends Component {
    
    componentDidMount(){
        this.props.handleFetchAllStudents()
    }
    render(){
        return (
            <div>
            <h1>All Students</h1>
            <ul>
            {
                this.props.allStudents && this.props.allStudents.map(student => {
                    return (
                        <li key={student.id}>
                        <Link to={`/students/${student.id}`}>{student.name}</Link>
                        </li>
                    )
                })
            }
            </ul>
            <h1>Add a New Student</h1>
            <form onSubmit={this.props.handleSubmit}>
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
                  Submit
                </button>
              </form>
            </div>
        )


    }
}

const mapStateToProps = function(state){
    return {
        allStudents: state.allStudents,
        currentUser: state.user
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        handleFetchAllStudents(){
            dispatch(fetchAllStudents())
        },
        handleSubmit(evt){
            evt.preventDefault()
            const newStudent = {
                firstName: evt.target.firstName.value,
                lastName: evt.target.lastName.value,
                email: evt.target.email.value,
                gpa: evt.target.gpa.value,
                campusId: evt.target.campusId.value
            }
            dispatch(addNewStudentThunk(newStudent))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllStudents))
