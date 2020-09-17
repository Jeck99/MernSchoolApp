const express = require('express')
const StudentCtrl = require('../controllers/student-ctrl')
const router = express.Router()

router.post('/student', StudentCtrl.createStudent)
router.get('/students',StudentCtrl.getStudents)
router.put('/student:id',StudentCtrl.updateStudent)
router.delete('/student:id',StudentCtrl.deleteStudent)
router.get('/student:id',StudentCtrl.getStudentById)
module.exports = router
