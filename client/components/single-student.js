import React, { Component } from 'react'
// import axios from 'axios'
// import AllStudents from '../components/all-students'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

function SingleStudent(props) {
    //console.log(props, "PROPS!!!!!!!!")
    //console.log("WE ARE IN SINGLE STUDENT")
    const student = props.singleStudent
    console.log(student, "selected Student")
    // componentDidMount() {
    //     const studentId = this.props.match.params.studentId
    //     //Note to self: studentId, not ID, because that's how you defined it in routes.js

    //     axios.get(`/api/students/${studentId}`)
    //         .then(res => res.data)
    //         .then(student => this.setState({
    //             student
    //         }))
    // }
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

// const mapStateToProps = function ({allStudents}, ownProps) {
//     const studentId = ownProps.match.params.studentId;
//     console.log(ownProps, "this is ownProps")
//     console.log(studentId, "studentId!!!")
//     return {
//         singleStudent: allStudents.find((student) => student.id === +studentId)
//     }
// }

const mapStateToProps = ({ allStudents }, ownProps) => ({
    singleStudent: allStudents.find(
        student => +student.id === +ownProps.match.params.id
    )
})

export default withRouter(connect(mapStateToProps)(SingleStudent))
