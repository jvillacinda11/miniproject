const router = require('express').Router()

router.use('/api', require('./tableControllers.js'))
router.use('/api', require('./waitlistControllers.js'))

module.exports = router
