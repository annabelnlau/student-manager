/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as Homepage} from './homepage'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllStudents} from './all-students'
export {default as AllCampuses} from './all-campuses'
export {default as SingleStudent} from './single-student'
export {default as SingleCampus} from './single-campus'
export {default as EditStudent} from './edit-student'
export {default as EditCampus} from './edit-campus'
