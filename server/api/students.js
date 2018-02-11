const router = require('express').Router()
const { Student } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Student.findAll()
        .then(students => res.json(students))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Student.create(req.body)
        .then(newStudent => res.json(newStudent))
        .catch(next)
})

router.get('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId)
        .then(student => res.json(student))
        .catch(next)
})

router.put('/:studentId', (req, res, next) => {
    Student.findById(req.params.studentId)
        .then(foundStudent => foundStudent.update(req.body))
        .then(updatedStudent => res.json(updatedStudent))
        .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
    Student.destroy({
        where: {
            id: req.params.studentId
        }
    })
        .then(() => res.send('Student has been successfully deleted'))
        .catch(next)
})
