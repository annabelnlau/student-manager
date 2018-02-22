import React from 'react'
import { connect } from 'react-redux'
import { editCampusThunk } from '../store'
import { Link, withRouter } from 'react-router-dom'

function EditCampus(props) {
    const campusToEdit = props.singleCampus
    if (!campusToEdit) return <div />

    return (
        <div>
            <h1>Edit Campus: {props.singleCampus.name}</h1>
            <p>Please complete every field.</p>
            <div>
                <form onSubmit={props.handleEditSubmit}>
                    <div>
                        <label htmlFor="name">
                            <small>Name</small>
                        </label>
                        <input
                            name="name"
                            type="text"
                            defaultValue={campusToEdit.name} />
                    </div>
                    <div>
                        <label htmlFor="imageUrl">
                            <small>Image URL</small>
                        </label>
                        <input
                            name="imageUrl"
                            type="text"
                            defaultValue={campusToEdit.imageUrl} />
                    </div>
                    <div>
                        <label htmlFor="description">
                            <small>Description</small>
                        </label>
                        <input
                            name="description"
                            type="text"
                            size="50"
                            defaultValue={campusToEdit.description} />
                    </div>
                    <button type="submit" className="btn-success">
                        Submit Changes
            </button>
                </form>
                <Link to={`/campuses/${campusToEdit.id}`}><button>Back to Campus</button></Link>
            </div>
        </div>
    )

}

const mapStateToProps = function (state, ownProps) {
    return {
        singleCampus: state.allCampuses.find(campus => campus.id === +ownProps.match.params.id)
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleEditSubmit(evt) {
            evt.preventDefault()
            const campusId = +ownProps.match.params.id
            const editedCampus = {
                name: evt.target.name.value,
                imageUrl: evt.target.imageUrl.value,
                description: evt.target.description.value
            }
            dispatch(editCampusThunk(editedCampus, campusId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCampus))

