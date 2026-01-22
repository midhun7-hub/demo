const express = require('express');
const router = express.Router();

const {createTask,getTasks,getTasksById,updateTask,updateTaskPatch} = require('../controllers/taskController');
const {protect} = require('../middleware/authMiddleware');

router.post('/create',protect, createTask);
router.get('/get',protect, getTasks);
router.get('/get/:id',protect, getTasksById);
router.put('/update/:id',protect, updateTask);
router.patch('/update/:id',protect, updateTaskPatch);
module.exports = router;