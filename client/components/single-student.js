import React, { Component } from 'react'
import axios from 'axios'
// import AllStudents from '../components/all-students'
import { Link } from 'react-router-dom'

export default class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {}
        }
    }

    componentDidMount() {
        const studentId = this.props.match.params.studentId
        //Note to self: studentId, not ID, because that's how you defined it in routes.js

        axios.get(`/api/students/${studentId}`)
            .then(res => res.data)
            .then(student => this.setState({
                student
            }))
    }

    render() {
        const student = this.state.student
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

}