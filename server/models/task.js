const mongoose = require('mongoose');
 
const tasksSchema = mongoose.Schema({
    user_id: { type: String, required: true },  
    title: { type: String, required: true }, 
    description: { type: String, required: false }, 
    due_date: { type: Date, required: true }
});

 
// Create the tasks model
const tasksModel = mongoose.model("tasks", tasksSchema);

module.exports = tasksModel;
