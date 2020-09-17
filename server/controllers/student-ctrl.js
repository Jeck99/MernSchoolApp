const Student = require('../models/student-model')

createStudent = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Student',
        })
    }
    const student = Student(body);
    if (!student) {
        return res.status(400).json({ success: false, error: err })
    }
    student.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: student._id,
                message: 'Student created!',
            })

        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'student not created!',
            })

        })
}
getStudents = async (req, res) => {
    await Student.find({}, (err,Students) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Students.length) {
            return res
                .status(404)
                .json({ success: false, error: `not a singal student was found` })
        }
        return res.status(200).json({ success: true, data:Students })
    }).catch(err => console.log(err))
}
updateStudent = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    Student.findOne({ _id: req.params.id }, (err, Student) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Student not found!',
            })
        }
        Student.first_name = body.first_name
        Student.last_name = body.last_name
        Student.class = body.class
        Student.lessons = body.lessons
        Student.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: Student._id,
                    message: 'Student updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Student not updated!',
                })
            })
    })
}
deleteStudent = async (req, res) => {
    await Student.findOneAndDelete({ _id: req.params.id }, (err, Student) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Student) {
            return res
                .status(404)
                .json({ success: false, error: `Student not found` })
        }
        return res.status(200).json({ success: true, data: Student })
    }).catch(err => console.log(err))
}
getStudentById = async (req, res) => {
    await Student.findOne({ _id: req.params.id }, (err, Student) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Student) {
            return res
                .status(404)
                .json({ success: false, error: `Student not found` })
        }
        return res.status(200).json({ success: true, data: Student })
    }).catch(err => console.log(err))
}

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent,
    getStudentById
}