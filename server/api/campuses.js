const router = require('express').Router()
const { Campus, Student } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Campus.findAll({
        include: [{model: Student}]
    })
        .then(campuses => res.json(campuses))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Campus.create(req.body)
        .then(newCampus => res.json(newCampus))
        .catch(next)
})

router.get('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
        .then(campus => res.json(campus))
        .catch(next)
})

router.put('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
        .then(foundCampus => foundCampus.update(req.body))
        .then(updatedCampus => res.json(updatedCampus))
        .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
    Campus.destroy({
        where: {
            id: req.params.campusId
        }
    })
        .then(() => res.send('Campus has been successfully deleted'))
        .catch(next)
})

