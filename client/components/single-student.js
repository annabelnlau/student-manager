import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllStudents, deleteStudentThunk } from '../store'

class SingleStudent extends Component {
    componentDidMount() {
        this.props.handleFetchAllStudents()
    }
    render() {
        const student = this.props.singleStudent
        if (!student) return <div />
        const studentsCampus = this.props.allCampuses.find(campus => campus.id === this.props.singleStudent.campusId)
        if (!studentsCampus) return <div />

        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1>{student.name} </h1>
                    <h4>Student Id: {student.id} </h4>
                    <h4>Email: {student.email} </h4>
                    <h4>GPA: {student.gpa}</h4>
                    <h4>Campus ID: {student.campusId}</h4>
                    <h4>Campus Name: {studentsCampus.name}</h4>
                    <Link to={`/students/${student.id}/edit`}><button>Edit Student</button></Link>
                    <p />
                    <p> <Link to="/students"><button>Back to Students</button></Link>
                    <Link to="/campuses"><button>Back to Campuses</button></Link>
                    </p>
                    <button className="btn btn-outline-danger" onClick={this.props.handleDelete}>Delete Student</button>
                        {/*<Link to={`/campuses/${student.campusId}`}><button>Back to {student.campus.name}</button></Link>*/}
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({ allStudents, allCampuses }, ownProps) => ({
    singleStudent: allStudents.find(
        student => +student.id === +ownProps.match.params.id
    ),
    allCampuses: allCampuses
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleFetchAllStudents() {
        dispatch(fetchAllStudents())
    },
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
