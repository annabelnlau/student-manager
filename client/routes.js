import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {
  Main,
  Login,
  Signup,
  UserHome,
  AllStudents,
  AllCampuses,
  Homepage,
  SingleStudent,
  SingleCampus,
  EditStudent,
  EditCampus
} from './components'
import { me, fetchAllStudents, fetchAllCampuses } from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {
              isLoggedIn &&
              <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route exact path="/" component={Homepage} />
              <Route exact path="/campuses" component={AllCampuses} />
              <Route path="/campuses/:id/edit" component={EditCampus} />
              <Route path="/campuses/:id" component={SingleCampus} />
              <Route exact path="/students" component={AllStudents} />
              <Route path="/students/:id/edit" component={EditStudent} />
              {/* NOTE: switched ^ v these routes in order to get EditStudent to render*/}
              <Route path="/students/:id" component={SingleStudent} />
              </Switch>
            }
            {/* Displays our Homepage component as a fallback */}
            <Route component={Homepage} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(fetchAllStudents())
      dispatch(fetchAllCampuses())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
