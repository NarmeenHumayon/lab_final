const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const tasksModel = require("./models/task")
require("dotenv").config()

mongoose.connect(process.env.CONNECTION_STRING)
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

 
app.post('/tasks', async (req, res) => { 
    try {
        const task = new tasksModel(req.body);
        const savedTask = await task.save();
        return res.status(201).json(savedTask);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});
 
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await tasksModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await tasksModel.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
app.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await tasksModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Return the updated task and validate inputs
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
 
app.delete('/tasks/:id', async (req, res) => {
    try {
        const deletedTask = await tasksModel.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
