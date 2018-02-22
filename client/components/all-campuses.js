import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { addNewCampusThunk, fetchAllCampuses } from '../store'

class AllCampuses extends Component {
    componentDidMount() {
        this.props.handleFetchAllCampuses()
    }
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="d-flex justify-content-center">
                    <h1>All Campuses</h1>
                    <ul>
                        {
                            this.props.allCampuses && this.props.allCampuses.map(campus => {
                                return (
                                    <div className="d-flex justify-content-sm-center" key={campus.id}>
                                        <span key={campus.id}>
                                            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                                            <p>
                                                <Link to={`/campuses/${campus.id}`}><img src={campus.imageUrl} /></Link>
                                            </p>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <div className="container-fluid">
                        <h1>Add a New Campus</h1>
                        <p>*Required</p>
                        <form onSubmit={this.props.handleSubmit}>
                            <div>
                                <label htmlFor="name">
                                    <small>Name*</small>
                                </label>
                                <input name="name" type="text" />
                            </div>
                            <div>
                                <label htmlFor="imgUrl">
                                    <small>Image Url</small>
                                </label>
                                <input name="imgUrl" type="text" />
                            </div>
                            <div>
                                <label htmlFor="description">
                                    <small>Description</small>
                                </label>
                                <input
                                name="description"
                                type="text"
                                size="50"
                                />
                            </div>
                            <button type="submit" className="btn-success">
                                Submit
                </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        allCampuses: state.allCampuses,
        currentUser: state.user
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        handleFetchAllCampuses() {
            dispatch(fetchAllCampuses())
        },
        handleSubmit(evt) {
            evt.preventDefault()
            const newCampus = {
                name: evt.target.name.value,
                imgUrl: evt.target.imgUrl.value,
                description: evt.target.description.value
            }
            dispatch(addNewCampusThunk(newCampus))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllCampuses))
