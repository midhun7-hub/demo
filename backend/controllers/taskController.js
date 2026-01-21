const task = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const newTask = await task.create({
            title,
            description,
            status,
            user: userId
        });
        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};