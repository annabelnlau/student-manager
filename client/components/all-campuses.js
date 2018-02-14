import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { addNewCampusThunk } from '../store'

function AllCampuses(props) {
    return (
        <div>
            <h1>All Campuses</h1>
            <ul>
                {
                    props.allCampuses && props.allCampuses.map(campus => {
                        return (
                            <li key={campus.id}>
                                <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                                <p>
                                <Link to={`/campuses/${campus.id}`}><img src={campus.imageUrl} /></Link>
                                </p>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <label htmlFor="name">
                            <small>Name</small>
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
                        <input name="description" type="text" />
                    </div>
                    <button type="submit" className="btn-success">
                        Add a New Campus
            </button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        allCampuses: state.allCampuses,
        currentUser: state.user
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        handleSubmit(evt){
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

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses)