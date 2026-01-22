
const task = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        if(!req.user.id){
            return res.status(401).json({ message: "Not authorized from t.ontoller" });
        }
        const newTask = await task.create({
            title,
            description,
            status,
            user: req.user.id
        });

        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
}

exports.getTasks = async (req, res) => {
    try {
        const tasks = await task.find({ user: req.user.id });   
        res.status(200).json({ tasks });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
}

exports.getTasksById = async (req, res) => {
    try {
        const tasks = await task.find({ status: req.params.id });
        res.status(200).json({ tasks });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
}



exports.updateTask = async (req, res) => {
    const usertask = await task.findOneAndUpdate(
        { _id: req.params.id, user: req.user.id },
        req.body,
        { new: true }
    );
    if (!usertask) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully", usertask });
}
    
exports.updateTaskPatch = async (req, res) => {
    try {
        const usertask = await task.findOneAndUpdate(
            { _id: req.params.id, 
                user: req.user.id },
        );
        if (!usertask) {
            return res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        res.json({ message: "Something went wrong" });
    }
}